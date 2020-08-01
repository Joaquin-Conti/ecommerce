import React from 'react'
import yellowHoodie from '../../assets/images/yellow-hoodie.jpg'
import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
import jeanNegro from '../../assets/images/jean-negro.jpeg'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ItemsWrapper.module.css'

export default function ItemsWrapper() {
    return (
        <div className={styles.Grid}>
            <ShopItem 
                name='Hoodie Amarillo'
                category='hoodies'
                image={yellowHoodie}
                alt='Yellow Hoodie'
                price='$2199'
            />
            <ShopItem 
                name='Hoodie Azul KOTK'
                category='hoodies'
                image={hoodieAzul}
                alt='Hoodie Azul'
                price='$1499'
            />
            
            <ShopItem 
                name='Jean Negro'
                category='pantalones'
                image={jeanNegro}
                alt='Jean Negro'
                price='$1899'
            />
            <ShopItem 
                name="Remera"
                category='remeras'
                price='$1899'
            />
            <ShopItem 
                name="Campera"
                category='camperas'
                price='$2799'
            />
            <ShopItem 
                name="Remera"
                category='remeras'
                price='$699'
            />
            <ShopItem 
                name="Hoodie"
                category='hoodies'
                price='$1899'
            />
            <ShopItem 
                name="Campera"
                category='camperas'
                price='$1399'
            />
            <ShopItem 
                name="Babucha"
                category='pantalon'
                price='$999'
            />
        </div>
    )
}
