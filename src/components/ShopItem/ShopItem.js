import React, { useState } from 'react'
import styles from './ShopItem.module.css'
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import * as images from '../../containers/images'


function ShopItem(props) {
    const [quantity, setQuantity] = useState(0)

    let image;
    if (props.id === "1") image = images.gotHoodie
    if (props.id === "2") image = images.hoodieAzul
    if (props.id === "3") image = images.jeanNegro
    if (props.id === "4") image = images.remeraGot1
    if (props.id === "6") image = images.remeraBrBa
    if (props.id === "7") image = images.hoodiePinkFloyd

    const addedToCart = (e, itemId, itemPrice) => {
        if (props.isLoggedIn){
            if (quantity === 0) {
                props.onAddedToCart(e, itemId, itemPrice)
            }
            checkProductsQty()
        } else {
            props.onShowingLogin()
        }
        // props.isLoggedIn ? props.onAddedToCart(e) : ;
    }

    const checkProductsQty = () => {
        props.cart.items.forEach(item => {
            if (item === props.id) {
                let qty = quantity;
                setQuantity(prevState => prevState + 1)
            }
        })
    }

    return <div id={props.id} className={styles.ShopItem}>
                <div className={styles.ImgDiv}>
                    <img src={image} alt={props.alt} />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    {/* <p className={styles.Text}>{props.talles}</p> */}
                    <p className={`${styles.Text} ${styles.Price}`}>${props.price}</p>
                    {/* <span>Cantidad</span>
                    <select id="quantity" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> */}
                    <button onClick={(e) => addedToCart(e, props.id, props.price)}>Add to cart<AddShoppingCartIcon /></button>
                </div>
        </div>
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        cart: {
            ...state.cart
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowingLogin: () => dispatch({type: 'LOGIN_OPENED'}),
        onNoResultsAvailable: () => dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'}),
        onAddedToCart: (e, itemId, itemPrice) => dispatch({type: 'PRODUCT_ADDED', payload: {item: {id: itemId, quantity: 1}, price: itemPrice}})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);