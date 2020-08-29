import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Logo/Logo.js'
import SearchBar from '../../../containers/SearchBar/SearchBar'

export default function Navbar(props) {
    return (
        <nav className={styles.Navbar}>
            <Logo 
                show={props.sidebarIsOpen ? styles.LogoHidden : ''}
            />
            <i className={`fas fa-shopping-cart fa-2x ${props.sidebarIsOpen ? styles.NotVisible : ''} ${styles.MobileCart}`}></i>
            <div onClick={props.btnClick} className={styles.MenuBtn + ' ' + (props.sidebarIsOpen ? styles.Open : '')}>
                <div className={styles.MenuBtnBurger}></div>
            </div>

            
            
            <div className={styles.Desktop}>
                {/* <SearchBar /> */}
                <ul className={styles.NavItems}>
                    <a href="/">
                        <li>PRODUCTOS</li>
                    </a>

                    <a href="/">
                        <li>NOSOTROS</li>
                    </a>
                    
                    <a href="/">
                        <li>CONTACTANOS</li>
                    </a>
                </ul>
                <i className={`fas fa-shopping-cart fa-2x`}></i>
            </div>
        </nav>
    )
}
