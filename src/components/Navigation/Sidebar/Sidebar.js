import React from 'react'
import styles from './Sidebar.module.css'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import Logo from '../../Logo/Logo'

export default function Sidebar(props) {
    return (
        <div className={styles.Sidebar + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close)}>
            <Logo />
            <SearchBar />
            <nav>
                <ul className={styles.NavItems}>
                    <a href="#">
                        <li>PRODUCTOS</li>
                    </a>

                    <a href="#">
                        <li>RANGO DE PRECIOS</li>
                    </a>

                    <a href="#">
                        <li>CATEGORIAS</li>
                    </a>

                    <a href="#">
                        <li>TALLES</li>
                    </a>

                    <a href="#">
                        <li>NOSOTROS</li>
                    </a>
                    
                    <a href="#">
                        <li>CONTACTANOS</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}
