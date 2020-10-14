import React from 'react'
import styles from './Content.module.css'
import ItemsWrapper from '../ItemsWrapper/ItemsWrapper'
import { connect } from 'react-redux'

function Content(props) {
    return (
        <section id="products">
            {props.resultsAvailable === false ? null : (props.productsFound ? (props.showing === 'all' ? <h1>ALL PRODUCTS</h1> : 
            <h1>{props.showing.toUpperCase()}</h1>) : <React.Fragment><h1>No products match that search.</h1> <br /> <i className={`far fa-frown fa-10x ${styles.FaceIcon}`}></i></React.Fragment>)
            }
            <ItemsWrapper 
                loading={props.loading}
                showing={props.showing}
                addedToCart={(e, itemId, itemPrice) => props.addedToCart(e, itemId, itemPrice)}
                itemsShown={props.itemsShown}
            />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        resultsAvailable: state.resultsAvailable,
        productsFound: state.productsFound
    }
}

export default connect(mapStateToProps)(Content);
