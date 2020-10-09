import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Welcome.module.css'

function Welcome(props) {
    return (
        <NavLink onClick={() => props.sidebarIsOpen ? props.onSidebarToggled() : null} to="/signin" className={`${styles.LoginBtn} ${props.sidebar ? styles.Mobile : ''}`}>Welcome to KEO! <br/> {props.isLoggedIn ? 'Have a nice shopping!' : 'Login/Signup'}</NavLink>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        sidebarIsOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSidebarToggled: () => dispatch({type: 'SIDEBAR_TOGGLED'}),
        onLoginClicked: () => dispatch({type: 'LOGIN_CLICKED'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);