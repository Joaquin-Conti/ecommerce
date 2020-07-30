import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default function Navigation() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    return (
        <React.Fragment>
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
