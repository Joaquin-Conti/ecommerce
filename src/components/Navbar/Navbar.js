import React from 'react'
import classes from './Navbar.css'
import Logo from '../Logo/Logo.js'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <button className='burger-btn'>
                <i class="fas fa-bars fa-3x"></i>
            </button>
            <div className='desktop'>
                <div>Search</div>
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
