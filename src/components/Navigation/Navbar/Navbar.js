import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Logo/Logo.js'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className={styles.Navbar}>
            <Logo 
                show={props.sidebarIsOpen ? styles.LogoHidden : ''}
            />
            <div className={`${styles.Cart} ${styles.MobileCart} ${props.sidebarIsOpen ? styles.NotVisible : ''}`}>
                <Link to="/cart"><i className={`fas fa-shopping-cart fa-2x `}></i></Link>
                <span>{props.numberOfItems}</span>
            </div>
            
            <div onClick={props.btnClick} className={styles.MenuBtn + ' ' + (props.sidebarIsOpen ? styles.Open : '')}>
                <div className={styles.MenuBtnBurger}></div>
            </div>

            
            
            <div className={styles.Desktop}>
                {/* <SearchBar /> */}
                <ul className={styles.NavItems}>
                    <li>
                        <Link to="/ecommerce">PRODUCTOS</Link>
                    </li>
                    <li>
                        <Link to="/about-us">NOSOTROS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACTANOS</Link>
                    </li>
                </ul>
                <div className={styles.Cart}>
                    <Link to="/cart"><i className={`fas fa-shopping-cart fa-2x`}></i></Link>
                    <span>{props.numberOfItems}</span>
                    <Link to="/cart">Ir al carrito</Link>
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
