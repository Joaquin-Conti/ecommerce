import React from 'react'
import styles from './Cart.module.css'
import { connect } from 'react-redux'
import LoginForm from '../../components/UI/LoginForm/LoginForm'

function Cart(props) {
    return (
        <section>
            {props.isLoggedIn ? 
            
            <React.Fragment>
                <h1>Your cart</h1>
                <div className={styles.Cart}>
                    <h3>Selected products</h3>
                    {props.cart.items.map(item => console.log(item))}
                    <h3>Total: ${props.cart.totalPrice}</h3>
                </div>
            </React.Fragment> : 
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>You need to sign in to add products to your cart!</h1>
                <LoginForm />
            </React.Fragment>}
            
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        cart: {
            ...state.cart
        }
    }
}

export default connect(mapStateToProps)(Cart);
