import React from 'react'
import yellowHoodie from '../../assets/images/yellow-hoodie.jpg'
import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
import jeanNegro from '../../assets/images/jean-negro.jpeg'
import remeraGot1 from '../../assets/images/remera-got1.jpg'
import remeraBrBa from '../../assets/images/remera-brba.jpg'
import gotHoodie from '../../assets/images/got-hoodie.jpg'
import hoodiePinkFloyd from '../../assets/images/hoodie-pink-floyd.jpg'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ItemsWrapper.module.css'
import allProducts from '../../containers/Products'

export default function ItemsWrapper(props) {

    return (
        <div className={styles.Grid}>
            {/* {allProducts.map(productObj => {
                return <ShopItem 
                    id={productObj.id}
                    name={productObj.name}
                    category={productObj.category}
                    talles={productObj.talles}
                    showing={props.showing}
                    image={gotHoodie}
                    alt={productObj.alt}
                    price={productObj.price}
                    addedToCart={props.addedToCart}
                />
            })} */}
            <ShopItem
                id='1'
                name='Hoodie GoT'
                category='hoodies todos'
                talles='S M L'
                // showing={props.showing}
                image={gotHoodie}
                alt='Got Hoodie'
                price='$2199'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='6'
                name="Remera BrBa"
                category='remeras todos'
                talles='S M XL'
                image={remeraBrBa}
                // showing={props.showing}
                price='$699'
                numberPrice="699"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='4'
                name="Remera GoT"
                category='remeras todos'
                talles='S XL'
                image={remeraGot1}
                // showing={props.showing}
                price='$699'
                numberPrice="699"
                addedToCart={props.addedToCart}
            />
            {/* <ShopItem
                id='5'
                name="Campera"
                category='camperas todos'
                talles='M'
                showing={props.showing}
                price='$2799'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            /> */}
            <ShopItem
                id='7'
                name="Hoodie Pink Floyd"
                category='hoodies todos'
                talles='S M L'
                image={hoodiePinkFloyd}
                // showing={props.showing}
                price='$1899'
                numberPrice="1899"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='2'
                name='Hoodie Azul KOTK'
                category='hoodies todos'
                talles='M L XL'
                image={hoodieAzul}
                // showing={props.showing}
                alt='Hoodie Azul'
                price='$1499'
                numberPrice="1499"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='3'
                name='Jean Negro'
                category='pantalones todos'
                talles='S M'
                image={jeanNegro}
                // showing={props.showing}
                alt='Jean Negro'
                price='$1899'
                numberPrice="1899"
                addedToCart={props.addedToCart}
            />
            {/* <ShopItem
                id='8'
                name="Campera"
                category='camperas todos'
                talles='M L'
                showing={props.showing}
                price='$1399'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='9'
                name="Babucha"
                talles='M L XL'
                category='pantalones todos'
                showing={props.showing}
                price='$999'
                numberPrice="2199"
                addedToCart={props.addedToCart}
            /> */}
        </div>
    )
}
