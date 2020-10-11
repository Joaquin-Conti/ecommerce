import React from 'react'
import axios from '../../../axios'
import { Button } from '@material-ui/core'
import styles from './LoginForm.module.css'
import Logo from '../../Logo/Logo'
import { connect } from 'react-redux'

function LoginForm(props) {
    const handleGoogleAuth = () => {
        props.isLoggedIn ? props.onHandleLogout() : props.onHandleLogin()
        // await axios.get("http://localhost:5000/api/auth/google")
    }

    // const handleAuth = async () => {
    //     await axios.get("http://localhost:5000/auth/google")
    // }
    
    return (
        <div className={`${styles.LoginForm} ${props.isRoute ? styles.SignInRoute : ''} ${props.cart ? styles.CartSignIn : ''}`}>
            {props.showText ? props.isLoggedIn ? <h2>You are logged in. <br />Have a nice shopping!</h2> : <h2>Sign up or login to get extra functionality!</h2> : null}
            <div className={styles.LogoDiv}>
                <Logo modal/>
            </div>
            {/* <label htmlFor="email">Email:</label>
            <input name="email" type="email"></input>
            <br/>
            <label htmlFor="password">Password:</label>
            <input name="password" type="password"></input>
            <br/>
            <Button
                onClick={() => handleAuth()}
                variant="contained"
                color="primary">
                    Submit
            </Button> */}
            <Button
                onClick={() => handleGoogleAuth()}
                variant="outlined"
                size="medium"
                color="default">
                    {props.isLoggedIn ? 'Log Out' : 'Sign in'}
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHandleLogin: () => dispatch({type: 'LOGGED_IN'}),
        onHandleLogout: () => dispatch({type: 'LOGGED_OUT'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
