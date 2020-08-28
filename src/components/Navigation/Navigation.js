import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Backdrop from '../UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import SearchButton from './SearchButton/SearchButton';

function Navigation(props) {
    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const categoriesArray = ['Hoodies','Pantalones','Remeras','Camperas','Todos']

    props.sidebarIsOpen ? document.getElementsByTagName('body')[0].style.overflow = "hidden" : 
    document.getElementsByTagName('body')[0].style.overflow = "scroll";

    useEffect(() => {
        if(firstRender) {
            setFirstRender(false);
        }
        if(!firstRender) {
            props.onSidebarToggled();
        }
    }, [props.showing])
    
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
                sidebarIsOpen={props.sidebarIsOpen}
                arrowClicked={() => setCategoriesOpen(!categoriesOpen)}
                showCategories={categoriesOpen}
                categoryClicked={props.categoryClicked}
                categories={categoriesArray}
            />
            <SearchButton 
                sidebarIsOpen={props.sidebarIsOpen}
            />
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSidebarToggled: () => dispatch({type: 'SIDEBAR_TOGGLED'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
