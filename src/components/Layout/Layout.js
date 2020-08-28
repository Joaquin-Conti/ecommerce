import React from 'react'
import './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../containers/Content/Content'
import { connect } from 'react-redux';

function Layout(props) {
    // const [showingCategory, setShowingCategory] = useState('todos');
    function addedToCart() {
        
    }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [props.])
    
    return (
        <React.Fragment>
            <Navigation
                categorySelected={(e) => props.onCategorySelect(e.target.innerText.toLowerCase())}
                showing={props.config.selectedCategory}
            />
            <Content
                showing={props.config.selectedCategory}
                isSidebarOpen={props.isSidebarOpen}
                addedToCart={() => props.addedToCart()}
            />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions},
        carrito: state.carrito,
        isSidebarOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCategorySelect: (category) => dispatch({type: 'CATEGORY_SELECTED', payload: category}),
        onAddedToCart: (category) => dispatch({type: 'PRODUCT_ADDED', payload: category}),
        onRemovedFromCart: (category) => dispatch({type: 'PRODUCT_REMOVED', payload: category})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
