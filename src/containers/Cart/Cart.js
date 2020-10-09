import React from 'react'
import styles from './Cart.module.css'
import { connect } from 'react-redux'
import LoginForm from '../../components/UI/LoginForm/LoginForm'
import CartItem from './CartItem/CartItem'

function Cart(props) {

    return (
        <section>
            {props.isLoggedIn ? 
            
            <React.Fragment>
                <h1>Your cart</h1>
                <div className={styles.Cart}>
                    {props.cart.items.length > 0 ? 
                    <React.Fragment>
                        {/* <h3>Selected products</h3> */}
                        <h3>Total: ${props.cart.totalPrice}</h3>
                        <div className={styles.Grid}>
                                {props.cart.items.map(item => {
                                    return props.products.map(product => {
                                        if (item.id === product.id) {
                                            let checkQuantity
                                            
                                            item.quantity < 1 ? checkQuantity = null :
                                            checkQuantity = <CartItem 
                                                key={product.id} 
                                                id={product.id} 
                                                price={product.price}
                                                name={product.name}
                                                quantity={item.quantity}
                                                />

                                            return checkQuantity
                                        }
                                    })
                                    
                                })}
                            
                        </div>
                    </React.Fragment>
                    :
                    <h3>You have no items in your cart.</h3>}
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
        products: state.products,
        cart: {
            ...state.cart
        },
        itemsInCart: state.itemsInCart
    }
}

export default connect(mapStateToProps)(Cart);
