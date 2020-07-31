import React from 'react'
import styles from './ShopItem.module.css'

export default function ShopItem(props) {
    return (
        <div className={styles.ShopItem}>
            <img src={props.image} alt={props.alt} />
            <h3>{props.name}</h3>
            <p className={styles.Price}>Talles</p>
            <p className={styles.Price}>{props.price}</p>
            <p><button>Añadir al carrito</button></p>
        </div>
    )
}
