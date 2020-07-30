import React, { useState } from 'react'
import classes from './Navbar.css'
import Logo from '../../Logo/Logo.js'
import SearchBar from '../../../containers/SearchBar/SearchBar'
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <Logo />
            <div onClick={props.btnClick} className={"menu-btn" + (props.sidebarIsOpen ? ' open' : '')}>
                <div className="menu-btn__burger"></div>
            </div>
            
            <div className='desktop'>
                <SearchBar />
                <ul className="nav-items">
                    <a href="#">
                        <li>PRODUCTOS</li>
                    </a>

                    <a href="#">
                        <li>NOSOTROS</li>
                    </a>
                    
                    <a href="#">
                        <li>CONTACTANOS</li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}
