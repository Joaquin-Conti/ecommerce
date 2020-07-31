import React from 'react'
import styles from './Content.module.css'
import yellowHoodie from '../../assets/images/yellow-hoodie.jpg'
import hoodieAzul from '../../assets/images/blue-hoodie-kotk.jpg'
import jeanNegro from '../../assets/images/jean-negro.jpeg'
import ShopItem from '../../components/ShopItem/ShopItem'

export default function Content() {
    return (
        <section>
            <ShopItem 
                name='Hoodie Amarillo'
                image={yellowHoodie}
                alt='Yellow Hoodie'
                price='$2199'
            />
            <ShopItem 
                name='Jean Negro'
                image={jeanNegro}
                alt='Jean Negro'
                price='$1899'
            />
            <ShopItem 
                name='Hoodie Azul King Of The Kongo'
                image={hoodieAzul}
                alt='Hoodie Azul'
                price='$1499'
            />
        </section>
    )
}
