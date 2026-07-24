import { useState, useEffect } from 'react'
import { fetchBreedImage } from '../api'

export default function BreedDetail({ breed }) {
  const [imgUrl, setImgUrl] = useState(null)
  const [imgLoading, setImgLoading] = useState(false)

  useEffect(() => {
    if (!breed) return
    let cancelled = false
    setImgUrl(null)
    setImgLoading(true)

    fetchBreedImage(breed.id)
      .then(url => { if (!cancelled) setImgUrl(url) })
      .catch(console.error)
      .finally(() => { if (!cancelled) setImgLoading(false) })

    return () => { cancelled = true }
  }, [breed?.id])

  if (!breed) {
    return (
      <div className="detail-panel">
        <div className="empty-state">
          <div style={{ fontSize: '3rem' }}>🐱</div>
          <p className="mt-2">Select a breed from the list</p>
        </div>
      </div>
    )
  }

  const tags = buildTags(breed)

  return (
    <div className="detail-panel">
      {imgLoading ? (
        <div className="placeholder-box">
          <div className="spinner-border text-secondary" role="status" />
        </div>
      ) : imgUrl ? (
        <img className="breed-image" src={imgUrl} alt={breed.name} />
      ) : (
        <div className="placeholder-box">No image available</div>
      )}

      <h3 className="fw-bold mb-2">{breed.name}</h3>

      <div className="d-flex flex-wrap gap-2 mb-3">
        {tags.map(tag => (
          <span key={tag} className="badge rounded-pill border text-dark fw-normal px-3 py-2">
            {tag}
          </span>
        ))}
      </div>

      <p>{breed.description || 'No description available.'}</p>
    </div>
  )
}

function buildTags(breed) {
  const tags = []
  if (breed.origin)      tags.push(`Origin: ${breed.origin}`)
  if (breed.life_span)   tags.push(`Lifespan: ${breed.life_span} yrs`)
  if (breed.temperament) tags.push(...breed.temperament.split(', '))
  return tags
}
