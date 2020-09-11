import React from 'react'
import styles from './ShopItem.module.css'
import { connect } from 'react-redux'


function ShopItem(props) {
    // return props.category.includes(props.config.selectedCategory) &&
    // (props.talles.includes(` ${props.config.talle}`) || props.config.talle === 'todos') &&
    // (parseInt(props.price) >= props.config.minPrice &&
    // parseInt(props.price) <= props.config.maxPrice)
    // &&
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
                <button onClick={(e) => props.addedToCart(e)}>Añadir al carrito</button>
            </div>
        </div>
}

// function addedToCart() {
//     const select = document.querySelector('#quantity');
//     console.log(select.options[select.selectedIndex])
// }

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