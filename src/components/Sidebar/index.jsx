import React from 'react'
import style from './Sidebar.module.scss'
import opcoesSidebar from './sidebar.json'

export default function Sidebar() {

  return (
    <nav className={style.principal}>
        <ul className={style.principal__lista}>
        {opcoesSidebar.map((item) => {
            return (
                <li className={style.principal__item}>
                    <img src={item.path} alt="" />
                    <a href="">{item.opcao}</a>
                </li>
            )
        })}
        </ul>
    </nav>
  )
}
