import React from 'react'
import fotos from '../Galeria/fotos.json'
import styles from './Tags.module.scss'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.principal}>
        <h2>Cidades</h2>

        <ul className={styles.principal__lista}>
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
