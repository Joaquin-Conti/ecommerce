import React from 'react'
import styles from './Sidebar.module.css'
// import SearchBar from '../../../containers/SearchBar/SearchBar'
import Logo from '../../Logo/Logo'

export default function Sidebar(props) {
    return (
        <div className={styles.Sidebar + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close)}>
            {/* <div className={styles.NavFixed}> */}
                <Logo />
                {/* <SearchBar /> */}
            {/* </div> */}
            <nav>
                <ul className={styles.NavItems}>
                    <li>
                        <a href="/">PRODUCTOS</a>
                    </li>
                    <li>
                        RANGO DE PRECIOS <br/>
                        <span>de</span>
                        <input onChange={props.minPriceSelected} className={styles.RangeSearch} type='number'></input>
                        <br />
                        <span>hasta</span>
                        <input onChange={props.maxPriceSelected} className={styles.RangeSearch} type='number'></input>
                    </li>

                    <li >CATEGORIAS <i onClick={props.arrowClicked} className={"fas fa-chevron-down " + styles.Arrow + ' ' + (props.showCategories ? styles.ArrowOpen : styles.ArrowClose)}></i>
                    {props.showCategories ? <ul className={styles.Categories}>
                        {props.categories.map((category) => {
                            return <li key={category+1} onClick={(e) => {props.changeColor(e); props.categorySelected(e)}}>{category}</li>
                        })}
                    </ul> : null}
                    </li>

                    <li>
                        TALLES
                        <form className={styles.Talles} onChange={props.talleSelected}>
                            <label htmlFor="S">S<input name="talle" type="radio" value="S" /></label>
                            <label htmlFor="M">M<input name="talle" type="radio" value="M" /></label>
                            <label htmlFor="L">L<input name="talle" type="radio" value="L" /></label>
                            <label htmlFor="XL">XL<input name="talle" type="radio" value="XL" /></label>
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
