import React from 'react'
import './Content.module.css'
import ItemsWrapper from '../../components/ItemsWrapper/ItemsWrapper'
import { connect } from 'react-redux'

function Content(props) {
    return (
        <section>
            {props.resultsAvailable === false ? null : (props.showing === 'todos' ? <h1>TODOS LOS PRODUCTOS</h1> : 
            <h1>{props.showing.toUpperCase()}</h1>
            )}
            <ItemsWrapper 
                showing={props.showing}
                addedToCart={props.addedToCart}
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
