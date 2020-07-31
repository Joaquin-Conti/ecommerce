import React from 'react'
import logo from '../../assets/images/keo-logo.jpeg'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <a href="#">
            <img id={styles.KeoLogo} src={logo} />
        </a>
    )
}
