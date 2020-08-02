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
                    <a href="/">
                        <li>PRODUCTOS</li>
                    </a>

                    <li>
                        RANGO DE PRECIOS <br/>
                        <span>de</span>
                        <input type='range'></input>
                        <span>hasta</span>
                        <input type='range'></input>
                    </li>

                    <li onClick={props.arrowClicked}>CATEGORIAS <i className={"fas fa-chevron-down " + styles.Arrow}></i>
                    {props.showCategories ? <ul className={styles.Categories}>
                        {props.categories.map((category) => {
                            return <li key={category+1} onClick={props.categoryClicked}>{category}</li>
                        })}
                        {/* <li onClick={props.categoryClicked}>Hoodies</li>
                        <li onClick={props.categoryClicked}>Pantalones</li>
                        <li onClick={props.categoryClicked}>Remeras</li>
                        <li onClick={props.categoryClicked}>Camperas</li>
                        <li onClick={props.categoryClicked}>Todos</li> */}
                    </ul> : null}
                    </li>

                    <a href="/">
                        <form>
                            <li>TALLES</li>
                            <input type='radio'></input>
                            <input type='radio'></input>
                            <input type='radio'></input>
                            <input type='radio'></input>
                        </form>
                    </a>

                    <a href="/">
                        <li>NOSOTROS</li>
                    </a>
                    
                    <a href="/">
                        <li>CONTACTANOS</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}
