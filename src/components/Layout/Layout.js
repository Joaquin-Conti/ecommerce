import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../containers/Content/Content'

export default function Layout() {
    return (
        <React.Fragment>
            <Navigation />
            <Content />
        </React.Fragment>
    )
}
