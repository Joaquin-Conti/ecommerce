import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Logo/Logo.js'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className={styles.Navbar}>
            <Logo 
                show={props.sidebarIsOpen ? styles.LogoHidden : ''}
            />
            <div className={`${styles.Cart} ${styles.MobileCart} ${props.sidebarIsOpen ? styles.NotVisible : ''}`}>
                <NavLink to="/cart"><i className={`fas fa-shopping-cart fa-2x `}></i></NavLink>
                <span>{props.numberOfItems}</span>
            </div>
            
            <div onClick={props.btnClick} className={styles.MenuBtn + ' ' + (props.sidebarIsOpen ? styles.Open : '')}>
                <div className={styles.MenuBtnBurger}></div>
            </div>

            
            
            <div className={styles.Desktop}>
                {/* <SearchBar /> */}
                <ul className={styles.NavItems}>
                    <li>
                        <NavLink to="/ecommerce">PRODUCTOS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">NOSOTROS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACTANOS</NavLink>
                    </li>
                </ul>
                <div className={styles.Cart}>
                    <NavLink to="/cart"><i className={`fas fa-shopping-cart fa-2x`}></i></NavLink>
                    <span>{props.numberOfItems}</span>
                    <NavLink to="/cart">Ir al carrito</NavLink>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfItems: state.cart.numberOfItems
    }
}


export default connect(mapStateToProps)(Navbar);
