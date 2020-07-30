import React from 'react'
import classes from './Sidebar.css'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import Logo from '../../Logo/Logo'

export default function Sidebar(props) {
    return (
        <div className={'sidebar' + (props.sidebarIsOpen ? ' open' : ' close')}>
            <Logo />
            <SearchBar />
            <nav>
                <ul className={classes.NavItems}>
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
