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
                name='Hoodie Amarillo'
                category='hoodies todos'
                showing={props.showing}
                image={yellowHoodie}
                alt='Yellow Hoodie'
                price='$2199'
            />
            <ShopItem 
                name='Hoodie Azul KOTK'
                category='hoodies todos'
                image={hoodieAzul}
                showing={props.showing}
                alt='Hoodie Azul'
                price='$1499'
            />
            
            <ShopItem 
                name='Jean Negro'
                category='pantalones todos'
                image={jeanNegro}
                showing={props.showing}
                alt='Jean Negro'
                price='$1899'
            />
            <ShopItem 
                name="Remera"
                category='remeras todos'
                showing={props.showing}
                price='$1899'
            />
            <ShopItem 
                name="Campera"
                category='camperas todos'
                showing={props.showing}
                price='$2799'
            />
            <ShopItem 
                name="Remera"
                category='remeras todos'
                showing={props.showing}
                price='$699'
            />
            <ShopItem 
                name="Hoodie"
                category='hoodies todos'
                showing={props.showing}
                price='$1899'
            />
            <ShopItem 
                name="Campera"
                category='camperas todos'
                showing={props.showing}
                price='$1399'
            />
            <ShopItem 
                name="Babucha"
                category='pantalones todos'
                showing={props.showing}
                price='$999'
            />
        </div>
    )
}
