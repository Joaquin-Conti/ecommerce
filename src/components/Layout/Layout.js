import React, { useState, useEffect } from 'react'
import './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../components/Content/Content'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import AboutUs from '../../containers/AboutUs/AboutUs';
import Contact from '../../containers/Contact/Contact';
import Cart from '../../containers/Cart/Cart';
import data from '../../containers/data'

function Layout(props) {
    const initialState = data.products.map(productObj => productObj);
    const [filteredItems, setFilteredItems] = useState(initialState);

    const filterItem = (productToCheck) => {
        return (
            productToCheck.category.includes(props.config.selectedCategory) &&
            (productToCheck.talles.includes(` ${props.config.talle}` || `${props.config.talle} `) ||
            props.config.talle === 'todos') &&
            (productToCheck.price >= props.config.minPrice &&
            productToCheck.price <= props.config.maxPrice)
        )
    }

    const searchClicked = () => {
        const newFilteredItems = [];
        console.log('[searchClicked] Called');
        data.products.map((productObj) => {
            if (filterItem(productObj)) {
                newFilteredItems.push(productObj)
            };
        })
        setFilteredItems(newFilteredItems)
    }

    useEffect(() => {
        console.log(filteredItems)
    })
    
    return (
        <React.Fragment>
            <Navigation
                categorySelected={(e) => props.onCategorySelect(e.target.innerText.toLowerCase())}
                showing={props.config.selectedCategory}
                searchClicked={() => {searchClicked()}}
            />
            <Route path="/about-us" exact component={AboutUs}/>
            <Route path="/ecommerce" exact render={() =>
                <Content
                    showing={props.config.selectedCategory}
                    isSidebarOpen={props.isSidebarOpen}
                    addedToCart={(e) => props.onAddedToCart(e)}
                    itemsShown={filteredItems}
                />}
            />
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cart" exact component={Cart}/>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions},
        cart: {
            ...state.cart
        },
        isSidebarOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCategorySelect: (category) => dispatch({type: 'CATEGORY_SELECTED', payload: category}),
        onAddedToCart: (e) => dispatch({type: 'PRODUCT_ADDED', payload: {quantity: 1}}),
        onRemovedFromCart: () => dispatch({type: 'PRODUCT_REMOVED', payload: 1})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
