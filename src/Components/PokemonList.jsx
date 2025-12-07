import React from 'react'
import PokemonCard from './PokemonCard'


export default function PokemonList({ items, onOpen, favorites, onToggleFav }) {
if (!items || items.length === 0) {
return <div className="empty">No Pokémon found</div>
}


return (
<div className="grid">
{items.map(p => (
<PokemonCard key={p.name} p={p} onOpen={onOpen} isFav={favorites.includes(p.name)} onToggleFav={onToggleFav} />
))}
</div>
)
}