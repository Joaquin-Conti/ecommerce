import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Welcome.module.css'

function Welcome(props) {
    return (
        <NavLink to="/signin" className={styles.LoginBtn}>Welcome to KEO! <br/> {props.isLoggedIn ? 'Have a nice shopping!' : 'Login/Signup'}</NavLink>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClicked: () => dispatch({type: 'LOGIN_CLICKED'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);