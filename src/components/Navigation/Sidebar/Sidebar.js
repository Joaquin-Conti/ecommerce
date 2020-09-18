import React from 'react'
import styles from './Sidebar.module.css'
// import SearchBar from '../../../containers/SearchBar/SearchBar'
import Logo from '../../Logo/Logo'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom'
import NavLinkItem from '../../UI/NavLinkItem/NavLinkItem';
import ListItem from '../../UI/ListItem/ListItem';
import { connect } from 'react-redux';
import Welcome from '../../UI/Welcome/Welcome';

function Sidebar(props) {
    
    return (
        <div className={styles.Sidebar + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close)}>
            {/* <div className={styles.NavFixed}> */}
                <Logo className={styles.Logo}/>
                {/* <NavLink to="/signin" className={styles.LoginBtn}>Welcome to KEO! <br/> Login/Signup</NavLink> */}
                <Welcome className={styles.LoginBtn} />
                {/* <SearchBar /> */}
            {/* </div> */}
            <nav>
                <ul className={styles.NavItems}>
                    <ListItem>
                        RANGO DE PRECIOS <br/>
                        <span>de</span>
                        <input onChange={props.minPriceSelected} className={styles.RangeSearch} type='number'></input>
                        <br />
                        <span>hasta</span>
                        <input onChange={props.maxPriceSelected} className={styles.RangeSearch} type='number'></input>
                    </ListItem>

                    <ListItem>
                        <div className={styles.CategoriesFlex}>CATEGORIAS 
                            <ExpandMoreIcon 
                                onClick={props.arrowClicked}
                                fontSize='large'
                                className={`fas fa-chevron-down ${styles.Arrow} ${(props.showCategories ? styles.ArrowOpen : styles.ArrowClose)}`}/>
                        </div>
                        {props.showCategories ? 
                        <ul className={styles.Categories}>
                            {props.categories.map((category) => {
                                return <li className="category-li" key={category+1} onClick={(e) => {props.changeColor(e); props.categorySelected(e)}}>{category}</li>
                            })}
                        </ul> : null}
                    </ListItem>

                    <ListItem>
                        TALLES
                        <form className={styles.Talles} onChange={props.talleSelected}>
                            <label htmlFor="S">S<input name="talle" type="radio" value="S" /></label>
                            <label htmlFor="M">M<input name="talle" type="radio" value="M" /></label>
                            <label htmlFor="L">L<input name="talle" type="radio" value="L" /></label>
                            <label htmlFor="XL">XL<input name="talle" type="radio" value="XL" /></label>
                        </form>
                    </ListItem>
                    <NavLinkItem className={styles.NavLinkItem} to="/ecommerce" onClick={() => console.log("clicked")}>PRODUCTOS</NavLinkItem>
                    <NavLinkItem className={styles.NavLinkItem} to="/about-us" onClick={() => console.log("clicked")}>NOSOTROS</NavLinkItem>
                    <NavLinkItem className={styles.NavLinkItem} to="/contact" onClick={() => console.log("clicked")}>CONTACTANOS</NavLinkItem>
                </ul>
            </nav>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSidebarToggled: () => {window.scrollTo(0, 0); console.log("sidebar toggled"); return dispatch({type: 'SIDEBAR_TOGGLED'})},
        onLoginClicked: () => dispatch({type: 'LOGIN_CLICKED'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)