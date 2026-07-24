export default function BreedItem({ breed, active, onSelect }) {
  return (
    <div
      className={`breed-item${active ? ' active' : ''}`}
      onClick={() => onSelect(breed)}
    >
      <div className="breed-name">{breed.name}</div>
      <div className="breed-origin">{breed.origin || '—'}</div>
    </div>
  )
}
