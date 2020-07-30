import React, { useState } from 'react'
import classes from './Navbar.css'
import Logo from '../Logo/Logo.js'
import SearchBar from '../../containers/SearchBar/SearchBar'
import Sidebar from '../../containers/Sidebar/Sidebar';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <Logo />
            <div onClick={() => setIsOpen(!isOpen)} className={"menu-btn" + (isOpen ? ' open' : '')}>
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
