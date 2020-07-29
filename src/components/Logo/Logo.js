import React from 'react'
import logo from '../../assets/images/keo-logo.jpeg'
import classes from './Logo.css'

export default function Logo() {
    return (
        <a href="#">
            <img id="keo-logo" src={logo} />
        </a>
    )
}
