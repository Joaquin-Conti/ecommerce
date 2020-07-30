import React from 'react'
import classes from './Layout.css'
import Navbar from '../Navbar/Navbar'
import Content from '../../containers/Content/Content'

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Content />
        </React.Fragment>
    )
}
