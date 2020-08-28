import React from 'react'
import styles from './ShopItem.module.css'

export default function ShopItem(props) {
    return (props.category.includes(props.showing) ?
        <div className={styles.ShopItem}>
            <img src={props.image} alt={props.alt} />
            <h3>{props.name}</h3>
            <p className={styles.Text}>{props.talles}</p>
            <p className={`${styles.Text} ${styles.Price}`}>{props.price}</p>
            <span>Cantidad</span>
            <select id="cantidad" name="cantidad">
                <option value="uno">1</option>
                <option value="dos">2</option>
                <option value="tres">3</option>
                <option value="cuatro">4</option>
                <option value="cinco">5</option>
            </select>
            <button onClick={props.addedToCart}>Añadir al carrito</button>
        </div> : null
    )
}
