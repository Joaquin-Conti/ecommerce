import React from 'react'
import './Content.module.css'
import ItemsWrapper from '../ItemsWrapper/ItemsWrapper'
import { connect } from 'react-redux'

function Content(props) {
    console.log('[Content] rendering...');
    return (
        <section id="products">
            {props.resultsAvailable === false ? null : (props.showing === 'todos' ? <h1>TODOS LOS PRODUCTOS</h1> : 
            <h1>{props.showing.toUpperCase()}</h1>
            )}
            <ItemsWrapper 
                showing={props.showing}
                addedToCart={(e) => props.addedToCart(e)}
                itemsShown={props.itemsShown}
            />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        resultsAvailable: state.resultsAvailable
    }
}

export default connect(mapStateToProps)(Content);