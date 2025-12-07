import React from 'react'


export default function PokemonModal({ pokemon, onClose }) {
if (!pokemon) return null
return (
<div className="modal-backdrop" onClick={onClose}>
<div className="modal" onClick={(e) => e.stopPropagation()}>
<button className="close" onClick={onClose}>✕</button>
<div className="modal-grid">
<img src={pokemon.image} alt={pokemon.name} />
<div>
<h2>{pokemon.name}</h2>
<div className="stat-row">
{pokemon.stats?.map(s => (
<div key={s.stat} className="stat">
<div className="stat-name">{s.stat}</div>
<div className="stat-value">{s.value}</div>
</div>
))}
</div>
<div className="abilities">
<strong>Abilities:</strong>
<ul>
{pokemon.abilities?.map(a => <li key={a}>{a}</li>)}
</ul>
</div>
</div>
</div>
</div>
</div>
)
}