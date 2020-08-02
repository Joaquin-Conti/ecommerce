import React from 'react'
import styles from './ShopItem.module.css'

export default function ShopItem(props) {
    return (props.category.includes(props.showing) ?
        <div className={styles.ShopItem}>
            <img src={props.image} alt={props.alt} />
            <h3>{props.name}</h3>
            <p className={styles.Text}>*Talles*</p>
            <p className={`${styles.Text} ${styles.Price}`}>{props.price}</p>
            <button>Añadir al carrito</button>
        </div> : null
    )
}
