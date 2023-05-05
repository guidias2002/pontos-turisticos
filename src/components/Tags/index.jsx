import React from 'react'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div>
        <h2>Cidades</h2>

        <ul>
            {tags.map((tag) => {
                return (
                    <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
                )
            })}
            <li onClick={() => setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
