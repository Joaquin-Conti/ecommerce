import React from 'react'
// import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
// import jeanNegro from '../../assets/images/jean-negro.jpeg'
// import remeraGot1 from '../../assets/images/remera-got1.jpg'
// import remeraBrBa from '../../public/assets/images/remera-brba.jpg'
// import gotHoodie from '../../assets/images/got-hoodie.jpg'
// import hoodiePinkFloyd from '../../../public/assets/images/'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ItemsWrapper.module.css'
import { connect } from 'react-redux'
import Spinner from '../UI/Spinner/Spinner'


function ItemsWrapper(props) {
    
    return (
        <div className={styles.Grid}>
        {/* {console.log(props.itemsShown)} */}
            {props.loading ? <Spinner /> :  props.itemsShown.map((productObj) => {
                 return <ShopItem
                     key={productObj.id}
                     id={productObj.id}
                     name={productObj.name}
                     category={productObj.category}
                     talles={productObj.talles}
                    //  showing={props.showing}
                     image={productObj.image}
                     alt={productObj.alt}
                     price={productObj.price}
                     addedToCart={(e, itemId, itemPrice) => props.addedToCart(e, itemId, itemPrice)}
                 />
            })}
            
            {/* <ShopItem
                id='1'
                name='Hoodie GoT'
                category='hoodies todos'
                talles='S M L'
                image={gotHoodie}
                alt='Got Hoodie'
                price='2199'
                numberPrice="2199"
                addedToCart={(e) => props.addedToCart(e)}
            />
            <ShopItem
                id='6'
                name="Remera BrBa"
                category='remeras todos'
                talles='S M XL'
                image={remeraBrBa}
                price='699'
                numberPrice="699"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='4'
                name="Remera GoT"
                category='remeras todos'
                talles='S XL'
                image={remeraGot1}
                price='699'
                numberPrice="699"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='7'
                name="Hoodie Pink Floyd"
                category='hoodies todos'
                talles='S M L'
                image={hoodiePinkFloyd}
                price='1899'
                numberPrice="1899"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='2'
                name='Hoodie Azul KOTK'
                category='hoodies todos'
                talles='M L XL'
                image={hoodieAzul}
                alt='Hoodie Azul'
                price='1499'
                numberPrice="1499"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='3'
                name='Jean Negro'
                category='pantalones todos'
                talles='S M'
                image={jeanNegro}
                alt='Jean Negro'
                price='1899'
                numberPrice="1899"
                addedToCart={props.addedToCart}
            /> */}
            {/* 
                    "id": "8",
                    "name": "Campera",
                    "category": "camperas todos",
                    "talles": "M L",
                    "price": "1399"
                ,
                    "id": "5",
                    "name": "Campera",
                    "category": "camperas todos",
                    "talles": "M",
                    price: "2799"
                
                
                    "id": "9",
                    "name": "Babucha",
                    "talles": "M L XL",
                    "category": "pantalones todos",
                    "price": "999"
                , */
                /* <ShopItem
                    key={allProducts[0].id}
                    id={allProducts[0].id}
                    name={allProducts[0].name}
                    category={allProducts[0].category}
                    talles={allProducts[0].talles}
                    // showing={props.showing}
                    image={allProducts[0].image}
                    alt={allProducts[0].alt}
                    price={allProducts[0].price}
                    addedToCart={props.addedToCart}
                /> */
             
            /* <ShopItem
                id='8'
                name="Campera"
                category='camperas todos'
                talles='M L'
                showing={props.showing}
                price='1399'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            />
            {/* <ShopItem
                id='5'
                name="Campera"
                category='camperas todos'
                talles='M'
                showing={props.showing}
                price='2799'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            /> */ 
            /* <ShopItem
                id='9'
                name="Babucha"
                talles='M L XL'
                category='pantalones todos'
                showing={props.showing}
                price='999'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            /> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        config: {...state.onSearchOptions},
        filterOptionsSelected: state.filterOptionsSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResultsAvailable: () => {console.log("dispatched");return dispatch({type: 'RESULTS_AVAILABLE_TOGGLED'})}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsWrapper);
