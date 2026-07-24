const BASE = 'https://api.thecatapi.com/v1'

export async function fetchBreeds(page, limit = 10) {
  const res = await fetch(`${BASE}/breeds?limit=${limit}&page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch breeds')
  return res.json()
}

export async function fetchBreedImage(breedId) {
  const res = await fetch(`${BASE}/images/search?breed_ids=${breedId}`)
  if (!res.ok) throw new Error('Failed to fetch image')
  const data = await res.json()
  return data[0]?.url || null
}
