import Galeria from 'components/Galeria'
import React from 'react'
import style from './PaginaInicial.module.scss'
import Sidebar from 'components/Sidebar'
import foto from './rio-de-janeiro.jpg'
import Populares from 'components/Populares'
import Cabecalho from 'components/Cabecalho'

export default function PaginaInicial() {
  return (
    <>
      <main>
        <Cabecalho/>
        <section className={style.principal}>
          <Sidebar />
          <div className={style.principal__imagem}>
            <h1>A galeria mais completa do turismo</h1>
            <img src={foto} alt="Rio de janeiro" />
          </div>
        </section>
        <div className={style.galeria}>
          <Galeria />
          <Populares/>
        </div>
      </main>
    </>
  )
}
