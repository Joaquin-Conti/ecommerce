import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Backdrop from '../UI/Backdrop/Backdrop';

export default function Navigation(props) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const categoriesArray = ['Hoodies','Pantalones','Remeras','Camperas','Todos']

    useEffect(() => {
        if(firstRender) {
            setFirstRender(false);
        }
        if(!firstRender) {
            setSidebarIsOpen(!sidebarIsOpen);
        }
    }, [props.showing])
    
    return (
        <React.Fragment>
            <Backdrop 
                show={sidebarIsOpen}
                backdropClicked={() => setSidebarIsOpen(false)}
                />
            <Navbar 
                sidebarIsOpen={sidebarIsOpen}
                btnClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            />
            <Sidebar 
                sidebarIsOpen={sidebarIsOpen}
                arrowClicked={() => setCategoriesOpen(!categoriesOpen)}
                showCategories={categoriesOpen}
                categoryClicked={props.categoryClicked}
                categories={categoriesArray}
            />
        </React.Fragment>
    )
}
