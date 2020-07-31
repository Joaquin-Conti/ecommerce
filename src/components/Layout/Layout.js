import React from 'react'
import styles from './Layout.module.css'
import Content from '../../containers/Content/Content'
import Navigation from '../Navigation/Navigation'

export default function Layout() {
    return (
        <React.Fragment>
            <Navigation />
            <Content />
        </React.Fragment>
    )
}
