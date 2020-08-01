import React from 'react'
import styles from './Content.module.css'
import ItemsWrapper from '../../components/ItemsWrapper/ItemsWrapper'

export default function Content() {
    return (
        <section>
            <h1>TODOS LOS PRODUCTOS</h1> {/* Should be dynamic */}
            <ItemsWrapper />
        </section>
    )
}
