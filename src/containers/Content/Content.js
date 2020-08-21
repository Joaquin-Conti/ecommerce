import React from 'react'
import styles from './Content.module.css'
import ItemsWrapper from '../../components/ItemsWrapper/ItemsWrapper'

export default function Content(props) {
    return (
        <section>
            {props.showing === 'todos' ? <h1>TODOS LOS PRODUCTOS</h1> : 
            <h1>{props.showing.toUpperCase()}</h1>
            }
            <ItemsWrapper 
                showing={props.showing}
                addedToCart={props.addedToCart}
            />
        </section>
    )
}
