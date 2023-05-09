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
                        <li key={item.id}>
                            <img 
                            src={item.path} 
                            alt={item.alt} 
                            />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}
