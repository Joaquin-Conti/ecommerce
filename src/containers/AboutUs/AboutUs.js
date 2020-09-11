import React from 'react'
import styles from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <section>
            <main>
                <h1>KEO! es un comercio de venta indumentaria minorista.</h1>
                <h3>Nos encontramos en Concordia, Entre Ríos</h3>
                <hr />
                    
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi vitae odio pretium porta ut vel lorem. Pellentesque hendrerit augue vitae est tincidunt dictum. Aenean viverra maximus nisl, non scelerisque enim porttitor in. Fusce ultricies fermentum tellus viverra pretium. Vivamus sit amet sapien quis mi dictum consequat. Suspendisse sed sagittis lectus. Phasellus sed neque tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu nunc mollis, venenatis erat eget, sodales dolor. In aliquam posuere consectetur. Nunc et odio ut nisl scelerisque semper vel id leo. Duis placerat, ante in eleifend interdum, ipsum ligula porttitor urna, in fermentum sem arcu et ex.</p>
                <hr />
                <h3 className={styles.Flex}>Nuestras redes <i className="fas fa-arrow-down fa-2x"></i></h3>
                    <div className={styles.Redes}>
                        <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><br/><i className="fab fa-instagram fa-3x"></i></a>
                        <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><br/><i className="fab fa-facebook fa-3x"></i></a>
                        <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><br/><i className="fab fa-whatsapp fa-3x"></i></a>
                    </div>
                
            </main>
        </section>
    )
}
