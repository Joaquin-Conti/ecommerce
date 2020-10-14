import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import axios from '../../axios'
import './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../components/Content/Content'
import AboutUs from '../../containers/AboutUs/AboutUs';
import Contact from '../../containers/Contact/Contact';
import Cart from '../../containers/Cart/Cart';
import Modal from '../UI/Modal/Modal';
import LoginForm from '../UI/LoginForm/LoginForm';
// import productsData from '../../containers/data'
// import { Switch } from '@material-ui/core';
import SignIn from '../../containers/SignIn/SignIn';
import Footer from '../../containers/Footer/Footer';

function Layout(props) {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productMatch, setProductMatch] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //HIDES BODY SCROLLING ON WHEN SIDEBAR OR MODAL IS SHOWN
    props.isSidebarOpen || props.showingLogin ? document.getElementsByTagName('html')[0].style.overflow = "hidden" : 
    document.getElementsByTagName('html')[0].style.overflow = "scroll";


    useEffect(() => {
        setLoading(true)
        axios.get('/products.json')
            .then(res => {
                setLoading(false)
                setProducts(dataToArray(res.data))
                props.onSetProducts(dataToArray(res.data))
            })
            .catch(err => {
                setLoading(false)
                setError(err)
            })
    }, [])
    
    useEffect(() => {
        if (!productMatch && !loading) { 
            props.onNoProductsFound() 
        } else {
            props.onProductsFound()
        }
    }, [productMatch])

    useEffect(() => {
        searchClicked()
        
    }, [products, props.config])

    
    // POSTING PRODUCTS TO FIREBASE DB (REPEATS PRODUCTS)
    // useEffect(() => {
    //     setLoading(true)
    //     const productsArray = [];
    //     productsData.products.map(product => {
    //         axios.post('/products.json', product)
    //             .then(res => {
    //                 setLoading(false)
    //                 setProducts(res.data)
    //             })
    //             .catch(err => {
    //                 setLoading(false)
    //                 setError(err)
    //             })
    //     })
    // }, [])

    const dataToArray = (data) => {
        const keys = Object.keys(data);
        return keys.map((key, index) => {
            const k = keys[index]
            const initials = data[k]
            return keys[index] = initials
        })
    }

    const filterItem = (productToCheck) => {
        return (
            productToCheck.category.includes(props.config.selectedCategory) &&
            (productToCheck.talles.includes(` ${props.config.talle}` || `${props.config.talle} `) ||
            props.config.talle === 'all') &&
            (productToCheck.price >= props.config.minPrice &&
            productToCheck.price <= props.config.maxPrice)
        )
    }

    const searchClicked = () => {
        const newFilteredProducts = [];
        let productsFound = false;
        const productsMapping = products.map((productObj) => {
            if (filterItem(productObj)) {
                productsFound = true
                newFilteredProducts.push(productObj)
            };
        })
        Promise.all(productsMapping)
            .then(() => setProductMatch(productsFound))
            .then(() => setFilteredProducts(newFilteredProducts))
    }

    let modal = null
    if (props.showingLogin) {
        modal = <Modal>
                    <LoginForm showText />
                </Modal>
    }
    

    return (
        <React.Fragment>
            {modal}
            <Navigation
                categorySelected={(e) => props.onCategorySelect(e.target.innerText.toLowerCase())}
                showing={props.config.selectedCategory}
                searchClicked={() => searchClicked()}
            />
            {/* <Switch> */}
                <Route path="/about-us" exact component={AboutUs}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/signin" exact component={SignIn}/>
                <Route path="/ecommerce" exact render={() =>
                    <Content
                        loading={loading}
                        showing={props.config.selectedCategory}
                        isSidebarOpen={props.isSidebarOpen}
                        // addedToCart={(e) => addedToCart(e)}
                        itemsShown={filteredProducts}
                    />}
                />
                <Route path="/" exact render={() =>
                    <Content
                        loading={loading}
                        showing={props.config.selectedCategory}
                        isSidebarOpen={props.isSidebarOpen}
                        // addedToCart={(e) => addedToCart(e)}
                        itemsShown={filteredProducts}
                    />}
                />
                <Footer />
            {/* </Switch> */}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        showingLogin: state.showingLogin,
        config: {...state.onSearchOptions},
        cart: {
            ...state.cart
        },
        isSidebarOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNoProductsFound: () => dispatch({type: 'PRODUCTS_NOT_FOUND'}),
        onProductsFound: () => dispatch({type: 'PRODUCTS_FOUND'}),
        onSetProducts: (products) => dispatch({type: 'PRODUCTS_OBTAINED', payload: products}),
        onCategorySelect: (category) => dispatch({type: 'CATEGORY_SELECTED', payload: category})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
