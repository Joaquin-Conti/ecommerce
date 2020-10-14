import React from 'react'
// import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ItemsWrapper.module.css'
import { connect } from 'react-redux'
import Spinner from '../UI/Spinner/Spinner'


function ItemsWrapper(props) {
    
    return (
        <div className={styles.Grid}>
            {props.loading ? <Spinner /> :  props.itemsShown.map((productObj) => {
                 return <ShopItem
                     key={productObj.id}
                     id={productObj.id}
                     name={productObj.name}
                     category={productObj.category}
                     talles={productObj.talles}
                    //  showing={props.showing}
                     image={productObj.image}
                     alt={productObj.alt}
                     price={productObj.price}
                     addedToCart={(e, itemId, itemPrice) => props.addedToCart(e, itemId, itemPrice)}
                 />
            })}
            
            {/* <ShopItem
                id='1'
                name='Hoodie GoT'
                category='hoodies todos'
                talles='S M L'
                image={gotHoodie}
                alt='Got Hoodie'
                price='2199'
                numberPrice="2199"
                addedToCart={(e) => props.addedToCart(e)}
            />*/}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions},
        filterOptionsSelected: state.filterOptionsSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResultsAvailable: () => {console.log("dispatched");return dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'})}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsWrapper);
