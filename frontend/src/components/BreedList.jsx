import { useState, useEffect, useRef, useCallback } from 'react'
import { fetchBreeds } from '../api'
import BreedItem from './BreedItem'

const LIMIT = 10

export default function BreedList({ selectedId, onSelect }) {
  const [breeds, setBreeds] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [allLoaded, setAllLoaded] = useState(false)
  const sentinelRef = useRef(null)
  const listRef = useRef(null)

  const loadMore = useCallback(async () => {
    if (loading || allLoaded) return
    setLoading(true)
    try {
      const data = await fetchBreeds(page, LIMIT)
      if (!data.length || data.length < LIMIT) setAllLoaded(true)
      if (data.length) {
        setBreeds(prev => [...prev, ...data])
        setPage(prev => prev + 1)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [page, loading, allLoaded])

  useEffect(() => {
    const sentinel = sentinelRef.current
    const list = listRef.current
    if (!sentinel || !list) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore() },
      { root: list, threshold: 0.1 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  return (
    <div className="breed-list-panel" ref={listRef}>
      {breeds.map(breed => (
        <BreedItem
          key={breed.id}
          breed={breed}
          active={breed.id === selectedId}
          onSelect={onSelect}
        />
      ))}

      <div ref={sentinelRef} style={{ height: 1 }} />

      {loading && (
        <div className="text-center py-3 text-muted">
          <div className="spinner-border spinner-border-sm" role="status" />
          <span className="ms-2">Loading…</span>
        </div>
      )}
    </div>
  )
}
