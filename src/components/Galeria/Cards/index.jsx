import React from 'react'

export default function Cards({itens, style}) {
  return (
    <ul className={style.galeria__cards}>
      {itens.map((item) => {
        return (
          <li className={style.galeria__card}>
            <img 
              className={style.galeria__imagem}
              src={item.imagem} 
              alt={item.titulo} 
            />

            <div className={style.galeria__descricao}>
              <h3>{item.titulo}</h3>
              <p>{item.tag}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
