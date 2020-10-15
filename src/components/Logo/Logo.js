import React from 'react'
// import logo from '../../assets/images/keo-logo.jpeg'
import logo from '../../public/assets/images/keo-logo2.jpeg'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo(props) {
    return (
        props.refreshLink ? 
            <a href="/ecommerce">
                <img className={`${styles.KeoLogo} ${props.className} ${props.modal ? styles.ModalLogo : ''}`} src={logo} alt="logo-img" />
            </a> :
            <Link to="/ecommerce">
                <img className={`${styles.KeoLogo} ${props.className} ${props.modal ? styles.ModalLogo : ''}`} src={logo} alt="logo-img" />
            </Link>
    )
}
