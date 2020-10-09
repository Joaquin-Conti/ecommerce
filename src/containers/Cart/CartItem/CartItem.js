import React from 'react'
import { connect } from 'react-redux'
import styles from './CartItem.module.css'
import * as images from '../../images'
import { Button } from '@material-ui/core';

function CartItem(props) {
    let image;
    let alt

    if (props.id === "1") image = images.gotHoodie
    if (props.id === "2") image = images.hoodieAzul
    if (props.id === "3") image = images.jeanNegro
    if (props.id === "4") image = images.remeraGot1
    if (props.id === "6") image = images.remeraBrBa
    if (props.id === "7") image = images.hoodiePinkFloyd
    
    return (
        <div id={props.id} className={styles.CartItem}>
            <div className={styles.ImgDiv}>
                <img className={styles.ImgTag} src={image} alt={alt} />
            </div>
            <div className={styles.BottomDiv}>
                <h3 className={styles.Name}>{props.name}</h3>
                <h3 className={styles.Quantity}>x{props.quantity}</h3>
                {/* <p className={styles.Text}>{props.talles}</p> */}
                <Button 
                variant="outlined"
                size="small"
                onClick={() => props.onRemovedFromCart(props.id, props.price)}
                >Remove</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        cartItems: state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemovedFromCart: (itemId, itemPrice) => dispatch({type: 'PRODUCT_REMOVED', payload: {item: {id: itemId, quantity: 1}, price: itemPrice}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)