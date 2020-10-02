import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Backdrop from '../UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import SearchButton from './SearchButton/SearchButton';

function Navigation(props) {
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    // const [firstRender, setFirstRender] = useState(true);
    const categoriesArray = ['Hoodies','Pantalones','Remeras','Todos']

    //CHANGES COLOR OF SELECTED CATEGORY
    function changeColor (e) {
        const liArray = Array.from(document.querySelectorAll(".category-li"))
        liArray.map((li) => {
            return li.style.color = "white";
        })
        e.target.style.color = "#f6b646";
    }

    //SHOULD CLOSE SIDEBAR AND RENDER SEARCH RESULT ITEMS
    // useEffect(() => {
        // if(firstRender) {
        //     setFirstRender(false);
        // }
        // if(!firstRender) {
        //     props.onSidebarToggled();
        // }
    // }, [{...props.onSearchOptions}])
    
    return (
        <React.Fragment>
            <Backdrop 
                show={props.sidebarIsOpen}
                backdropClicked={() => props.onSidebarToggled()}
                />
            <Navbar 
                sidebarIsOpen={props.sidebarIsOpen}
                btnClick={() => props.onSidebarToggled()}
            />
            <Sidebar 
                sidebarToggled={() => {console.log("sidebar toggled f"); return props.onSidebarToggled()}}
                sidebarIsOpen={props.sidebarIsOpen}
                arrowClicked={() => setCategoriesOpen(!categoriesOpen)}
                showCategories={categoriesOpen}
                categorySelected={(e) => props.onCategorySelected(e)}
                talleSelected={(e) => props.onTalleSelected(e)}
                minPriceSelected={(e) => props.onMinPriceSelected(e)}
                maxPriceSelected={(e) => props.onMaxPriceSelected(e)}
                categories={categoriesArray}
                changeColor={(e) => changeColor(e)}
            />
            <SearchButton 
                sidebarIsOpen={props.sidebarIsOpen}
                searchClicked={() => {props.onSidebarToggled();console.log('[Navigation] clicked'); props.searchClicked(); props.onSearchClicked()}}
                desktop
            />
            <SearchButton 
                sidebarIsOpen={props.sidebarIsOpen}
                searchClicked={() => {props.onSidebarToggled();console.log('[Navigation] clicked'); props.searchClicked(); props.onSearchClicked()}}
                mobile
            />
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        onSearchOptions: {...state.onSearchOptions},
        sidebarIsOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSidebarToggled: () => {window.scrollTo(0, 0); console.log("sidebar toggled"); return dispatch({type: 'SIDEBAR_TOGGLED'})},
        onSearchClicked: () => dispatch({type: 'SEARCH_BUTTON_CLICKED'}),
        onCategorySelected: (e) => dispatch({type: 'CATEGORY_SELECTED', payload: e.target.innerHTML.toLowerCase()}),
        onTalleSelected: (e) => dispatch({type: 'TALLE_SELECTED', payload: e.target.value}),
        onMinPriceSelected: (e) => dispatch({type: 'MIN_PRICE_SELECTED', payload: e.target.value}),
        onMaxPriceSelected: (e) => dispatch({type: 'MAX_PRICE_SELECTED', payload: e.target.value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
