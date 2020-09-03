import allProducts from './products.json'
import React from 'react'
import { connect } from 'react-redux'
const filterResults = (productToCheck) => {
    // console.log(productToCheck)
    return (
        productToCheck.category.includes(props.config.selectedCategory) &&
        (productToCheck.talles.includes(props.config.talle) || props.config.talle === 'todos') &&
        (productToCheck.price >= props.config.minPrice &&
        productToCheck.price <= props.config.maxPrice)
    )
}

const filterItems = (props) => {
    allProducts.map(productObj => {
        if (filterResults(productObj)) {
            //ON FILTER
            setFilteredItems([...filteredItems],
            <ShopItem
                key={productObj.id}
                id={productObj.id}
                name={productObj.name}
                category={productObj.category}
                talles={productObj.talles}
                // showing={props.showing}
                image={productObj.image}
                alt={productObj.alt}
                price={productObj.price}
                addedToCart={props.addedToCart}
            />)
        }
    })
}
const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions},
        filterOptionsSelected: state.filterOptionsSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onResultsAvailable: () => {console.log("dispatched");return dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'})}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(filterItems);