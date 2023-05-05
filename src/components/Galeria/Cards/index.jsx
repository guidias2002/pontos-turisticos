import React from 'react'

export default function Cards({itens}) {
  return (
    <ul>
      {itens.map((item) => {
        return (
          <li>
            <img src={item.imagem} alt={item.titulo} />
          </li>
        )
      })}
    </ul>
  )
}
