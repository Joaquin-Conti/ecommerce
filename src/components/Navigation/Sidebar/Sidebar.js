import React from 'react'
import styles from './Sidebar.module.css'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import Logo from '../../Logo/Logo'

export default function Sidebar(props) {
    return (
        <div className={styles.Sidebar + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close)}>
            {/* <div className={styles.NavFixed}> */}
                <Logo />
                <SearchBar />
            {/* </div> */}
            <nav>
                <ul className={styles.NavItems}>
                    <li>
                        <a href="/">PRODUCTOS</a>
                    </li>
                    <li>
                        RANGO DE PRECIOS <br/>
                        <span>de</span>
                        <input className={styles.RangeSearch} type='number'></input>
                        <span>hasta</span>
                        <input className={styles.RangeSearch} type='number'></input>
                    </li>

                    <li onClick={props.arrowClicked}>CATEGORIAS <i className={"fas fa-chevron-down " + styles.Arrow}></i>
                    {props.showCategories ? <ul className={styles.Categories}>
                        {props.categories.map((category) => {
                            return <li key={category+1} onClick={props.categoryClicked}>{category}</li>
                        })}
                    </ul> : null}
                    </li>

                    <li>
                        TALLES
                        <form>
                            <input type='radio'></input>
                            <input type='radio'></input>
                            <input type='radio'></input>
                            <input type='radio'></input>
                        </form>
                    </li>

                    <li>
                        <a href="/">NOSOTROS</a>
                    </li>
                    
                    <li>
                        <a href="/">CONTACTANOS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
