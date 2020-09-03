import React from 'react'
import styles from './Cart.module.css'
import { connect } from 'react-redux'

function Cart(props) {
    return (
        <section>
            <h1>Tu carrito</h1>
            <div className={styles.Cart}>
                <h3>Productos seleccionados:</h3>
                <h3>Total: ${props.cart.totalPrice}</h3>
            </div>
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

export default connect(mapStateToProps)(Cart);
