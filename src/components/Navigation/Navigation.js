import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Backdrop from '../UI/Backdrop/Backdrop';

export default function Navigation() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
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
            />
        </React.Fragment>
    )
}
