import React from 'react'
import styles from './AboutUs.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

export default function AboutUs() {
    return (
        <section>
            <main>
                <h1>We are KEO, an apparel retailer.</h1>
                <h3>Our shop is located in Concordia, Entre Ríos.</h3>
                <hr />
                    
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi vitae odio pretium porta ut vel lorem. Pellentesque hendrerit augue vitae est tincidunt dictum. Aenean viverra maximus nisl, non scelerisque enim porttitor in. Fusce ultricies fermentum tellus viverra pretium. Vivamus sit amet sapien quis mi dictum consequat. Suspendisse sed sagittis lectus. Phasellus sed neque tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu nunc mollis, venenatis erat eget, sodales dolor. In aliquam posuere consectetur. Nunc et odio ut nisl scelerisque semper vel id leo. Duis placerat, ante in eleifend interdum, ipsum ligula porttitor urna, in fermentum sem arcu et ex.</p>
                <hr />
                <h3 className={styles.Flex}>Follow us on socials<i className="fas fa-arrow-down fa-2x"></i></h3>
                <div className={styles.Redes}>
                    <IconButton>
                        <a target="blank" href="https://www.instagram.com/" className={styles.Instagram}><InstagramIcon 
                                fontSize='large'
                        /></a>
                    </IconButton>
                    <IconButton>
                        <a target="blank" href="https://www.facebook.com/" className={styles.Facebook}><FacebookIcon 
                                fontSize='large'
                        /></a>
                    </IconButton>
                    <IconButton>
                        <a target="blank" href="https://www.whatsapp.com/" className={styles.Whatsapp}><WhatsAppIcon 
                                fontSize='large'
                        /></a>
                    </IconButton>
                </div>
                
            </main>
        </section>
    )
}
