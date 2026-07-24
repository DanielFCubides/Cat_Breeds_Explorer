import { useState } from 'react'
import BreedList from './components/BreedList'
import BreedDetail from './components/BreedDetail'
import './App.css'

export default function App() {
  const [selectedBreed, setSelectedBreed] = useState(null)

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h4 className="mb-0 fw-bold">🐾 Cat Breeds Explorer</h4>
        <small className="text-muted">Pick a breed to learn more. Scroll the list to load more breeds.</small>
      </header>

      <div className="main-layout">
        <BreedList selectedId={selectedBreed?.id} onSelect={setSelectedBreed} />
        <BreedDetail breed={selectedBreed} />
      </div>
    </div>
  )
}
