const API_BASE = 'https://pokeapi.co/api/v2'


export async function fetchPokemonPage(offset = 0, limit = 20) {
const res = await fetch(`${API_BASE}/pokemon?offset=${offset}&limit=${limit}`)
if (!res.ok) throw new Error('Failed to load Pokémon list')
return res.json() // { count, next, previous, results }
}


export async function fetchPokemonDetails(urlOrName) {
const url = typeof urlOrName === 'string' && urlOrName.startsWith('http')
? urlOrName
: `${API_BASE}/pokemon/${urlOrName}`
const res = await fetch(url)
if (!res.ok) throw new Error('Failed to load Pokémon details')
return res.json()
}


export async function fetchTypes() {
const res = await fetch(`${API_BASE}/type`)
if (!res.ok) throw new Error('Failed to load types')
return res.json() // { results: [{name, url}, ...] }
}