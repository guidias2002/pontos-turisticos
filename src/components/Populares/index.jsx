import React from 'react'
import style from './Populares.module.scss'
import populares from './populares.json'

export default function Populares() {

    return (
        <aside className={style.principal}>
            <h2>Populares</h2>
            <ul className={style.principal__lista}>
                {populares.map((item) => {
                    return (
                        <li className={style.principal__item} key={item.id}>
                            <img 
                            className={style.principal__imagem}
                            src={item.path} 
                            alt={item.alt} 
                            />
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
