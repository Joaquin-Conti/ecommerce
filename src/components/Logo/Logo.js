import React from 'react'
import logo from '../../assets/images/keo-logo.jpeg'
import styles from './Logo.module.css'

export default function Logo(props) {
    return (
        <a href="/">
            <img className={props.show} id={styles.KeoLogo} src={logo} alt="logo-img" />
        </a>
    )
}
