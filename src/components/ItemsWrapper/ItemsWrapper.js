import React from 'react'
import yellowHoodie from '../../assets/images/yellow-hoodie.jpg'
import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
import jeanNegro from '../../assets/images/jean-negro.jpeg'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ItemsWrapper.module.css'

export default function ItemsWrapper(props) {

    return (
        <div className={styles.Grid}>
            <ShopItem
                id='1'
                name='Hoodie Amarillo'
                category='hoodies todos'
                talles='S M L'
                showing={props.showing}
                image={yellowHoodie}
                alt='Yellow Hoodie'
                price='$2199'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='2'
                name='Hoodie Azul KOTK'
                category='hoodies todos'
                talles='M L XL'
                image={hoodieAzul}
                showing={props.showing}
                alt='Hoodie Azul'
                price='$1499'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='3'
                name='Jean Negro'
                category='pantalones todos'
                talles='S M'
                image={jeanNegro}
                showing={props.showing}
                alt='Jean Negro'
                price='$1899'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='4'
                name="Remera"
                category='remeras todos'
                talles='S XL'
                showing={props.showing}
                price='$1899'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='5'
                name="Campera"
                category='camperas todos'
                talles='M'
                showing={props.showing}
                price='$2799'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='6'
                name="Remera"
                category='remeras todos'
                talles='S M XL'
                showing={props.showing}
                price='$699'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='7'
                name="Hoodie"
                category='hoodies todos'
                talles='S M L'
                showing={props.showing}
                price='$1899'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='8'
                name="Campera"
                category='camperas todos'
                talles='M L'
                showing={props.showing}
                price='$1399'
                addedToCart={props.addedToCart}
            />
            <ShopItem
                id='9'
                name="Babucha"
                talles='M L XL'
                category='pantalones todos'
                showing={props.showing}
                price='$999'
                addedToCart={props.addedToCart}
            />
        </div>
    )
}
