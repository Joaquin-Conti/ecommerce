import React from 'react'
import { connect } from 'react-redux'
import styles from './CartItem.module.css'
import * as images from '../../images'
import { Button } from '@material-ui/core';

function CartItem(props) {
    let image;
    
    let name
    let alt
    let id
    if (props.id === "1") image = images.gotHoodie
    if (props.id === "2") image = images.hoodieAzul
    if (props.id === "3") image = images.jeanNegro
    if (props.id === "4") image = images.remeraGot1
    if (props.id === "6") image = images.remeraBrBa
    if (props.id === "7") image = images.hoodiePinkFloyd
    
    return (
        <div id={props.id} className={styles.CartItem}>
            <div className={styles.ImgDiv}>
                <img src={props.image} alt={alt} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <h3>x{props.quantity}</h3>
                {/* <p className={styles.Text}>{props.talles}</p> */}
                <Button 
                variant="outlined"
                size="small">Remove</Button>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)