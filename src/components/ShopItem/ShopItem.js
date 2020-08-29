import React from 'react'
import styles from './ShopItem.module.css'
import { connect } from 'react-redux'

function ShopItem(props) {
    return (props.name.includes(props.config.searchBarInput) && 
        props.category.includes(props.config.selectedCategory) &&
        ((props.talles.includes(props.config.talle) || props.config.talle === 'todos') &&
        (parseInt(props.numberPrice) >= props.config.minPrice &&
        parseInt(props.numberPrice) <= props.config.maxPrice))
        &&
        <div className={styles.ShopItem}>
            <div className={styles.ImgDiv}>
                <img src={props.image} alt={props.alt} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.Text}>{props.talles}</p>
                <p className={`${styles.Text} ${styles.Price}`}>{props.price}</p>
                <span>Cantidad</span>
                <select id="cantidad" name="cantidad">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={props.addedToCart}>Añadir al carrito</button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNoResultsAvailable: () => {console.log("dispatched");return dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'})}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);