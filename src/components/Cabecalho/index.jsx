import React from 'react'
import search from './search.png' 
import style from './Cabecalho.module.scss'

export default function Cabecalho() {
  return (
    <header className={style.principal}>
        <span>TurismoBR</span>
        <div  className={style.principal__container}>
            <input className={style.principal__input} type="text" placeholder='Pesquisar lugar'/>
            <img src={search} alt="Ícone de lupa" />
        </div>
    </header>
  )
}
