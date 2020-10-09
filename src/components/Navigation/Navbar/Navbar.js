import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Logo/Logo.js'
// import SearchBar from '../../../containers/SearchBar/SearchBar'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { IconButton } from '@material-ui/core';
import NavLinkItem from '../../UI/NavLinkItem/NavLinkItem';
import Welcome from '../../UI/Welcome/Welcome';

function Navbar(props) {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.LeftGroup}>
                <Logo
                    className={props.sidebarIsOpen ? styles.NotVisible : ''}
                />
                <div className={`${styles.Cart} ${styles.MobileCart} ${props.sidebarIsOpen ? styles.NotVisible : ''}`}>
                    <NavLink to="/cart"><ShoppingCartIcon fontSize='large' /></NavLink>
                    <span>{props.numberOfItems}</span>
                </div>
                
                <div onClick={props.btnClick} className={styles.MenuBtn + ' ' + (props.sidebarIsOpen ? styles.Open : '')}>
                    <div className={styles.MenuBtnBurger}></div>
                </div>
            </div>
            
            
            <div className={styles.Desktop}>
                {/* <SearchBar /> */}
                <ul className={styles.MiddleGroup}>
                    <NavLinkItem to="/ecommerce">PRODUCTS</NavLinkItem>
                    <NavLinkItem to="/about-us">ABOUT US</NavLinkItem>
                    <NavLinkItem to="/contact">CONTACT US</NavLinkItem>
                    {/* <li>
                        <NavLink to="/ecommerce">PRODUCTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACT US</NavLink>
                    </li> */}
                </ul>
                <div className={styles.RightGroup}>
                    <div className={styles.Cart}>
                        <NavLink to="/cart"><ShoppingCartIcon fontSize='large' /> </NavLink>
                        <span>{props.numberOfItems}</span>
                    </div>
                    <Welcome />
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

const mapDispatchToProps = dispatch => {
    return {
        onLoginClicked: () => dispatch({type: 'LOGIN_CLICKED'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
