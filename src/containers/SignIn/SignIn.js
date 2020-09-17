import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/UI/LoginForm/LoginForm'

// id 69313904623-mgl0l8dnlh5e7ll7olkc6d95cdbielce.apps.googleusercontent.com

// secret xsO_WxnVZdNb0c2GXFoWlRH1
function SignIn(props) {
    return (
        <section>
            <LoginForm showText/>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        cart: {
            ...state.cart
        }
    }
}

export default connect(mapStateToProps)(SignIn);