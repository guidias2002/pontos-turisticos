import React, { useState } from 'react'
import fotos from './fotos.json'
import Tags from 'components/Tags'
import Cards from './Cards'
import style from './Galeria.module.scss'

export default function Galeria() {

  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((item) => item.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) =>{
      return foto.tag === tag;
    })

    setItens(novasFotos)
  }

  return (
    <main className={style.galeria}>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
      <Cards itens={itens} style={style}/>
    </main>
  )
}
