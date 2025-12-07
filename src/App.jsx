import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const data = await res.json();

        const details = await Promise.all(
          data.results.map(async (p) => {
            const res2 = await fetch(p.url);
            const d = await res2.json();

            return {
              name: d.name,
              image: d.sprites?.other?.["official-artwork"]?.front_default,
              abilities: d.abilities.map(a => a.ability.name),
              types: d.types.map(t => t.type.name),
              stats: d.stats.map(s => ({
                stat: s.stat.name,
                value: s.base_stat
              }))
            };
          })
        );

        setPokemon(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }

    getData();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokédex</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {pokemon.map((p, i) => (
          <div
            key={i}
            style={{
              width: "200px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <img src={p.image} alt={p.name} width="150" />
            <h3>{p.name.toUpperCase()}</h3>

            <p><strong>Types:</strong> {p.types.join(", ")}</p>
            <p><strong>Abilities:</strong> {p.abilities.join(", ")}</p>

            <div>
              <strong>Stats:</strong>
              <ul>
                {p.stats.map((s, idx) => (
                  <li key={idx}>
                    {s.stat}: {s.value}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
