import React, { useState } from 'react'
import styles from './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../containers/Content/Content'

export default function Layout() {
    const [showingCategory, setShowingCategory] = useState('todos');
    
    return (
        <React.Fragment>
            <Navigation
                categoryClicked={(e) => setShowingCategory(e.target.innerText.toLowerCase())}
                showing={showingCategory}
            />
            <Content
                showing={showingCategory}
            />
        </React.Fragment>
    )
}
