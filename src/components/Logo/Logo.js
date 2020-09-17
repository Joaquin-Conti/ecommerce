import React from 'react'
// import logo from '../../assets/images/keo-logo.jpeg'
import logo from '../../public/assets/images/keo-logo2.jpeg'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo(props) {
    return (
        <Link to="/ecommerce">
            <img className={props.className} id={styles.KeoLogo} src={logo} alt="logo-img" />
        </Link>
    )
}
