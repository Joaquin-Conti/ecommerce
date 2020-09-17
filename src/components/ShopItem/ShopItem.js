import React from 'react'
import styles from './ShopItem.module.css'
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function ShopItem(props) {
    // return props.category.includes(props.config.selectedCategory) &&
    // (props.talles.includes(` ${props.config.talle}`) || props.config.talle === 'todos') &&
    // (parseInt(props.price) >= props.config.minPrice &&
    // parseInt(props.price) <= props.config.maxPrice)
    // &&
    const addedToCart = (e, itemId, itemPrice) => {
        props.isLoggedIn ? 
        props.onAddedToCart(e, itemId, itemPrice) :
        props.onShowingLogin()
        // props.isLoggedIn ? props.onAddedToCart(e) : ;
    }

    return <div id={props.id} className={styles.ShopItem}>
                <div className={styles.ImgDiv}>
                    <img src={props.image} alt={props.alt} />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <p className={styles.Text}>{props.talles}</p>
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
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowingLogin: () => dispatch({type: 'LOGIN_OPENED'}),
        onNoResultsAvailable: () => dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'}),
        onAddedToCart: (e, itemId, itemPrice) => dispatch({type: 'PRODUCT_ADDED', payload: {item: itemId, price: itemPrice, quantity: 1}})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);