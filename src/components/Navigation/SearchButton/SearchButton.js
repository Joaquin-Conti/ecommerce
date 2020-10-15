import React from 'react'
import { withRouter } from 'react-router';
import styles from './SearchButton.module.css'

function SearchButton(props) {
    function nextPath(path) {
        props.history.push(path);
    }
    
    return (
        <button 
        onClick={() => {props.searchClicked(); nextPath('/ecommerce')}} 
        className={styles.SearchButton + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close) +
        ' ' + (props.desktop ? styles.Desktop : styles.Mobile)}>
            Search
        </button>
    )
}

export default withRouter(SearchButton)