import styles from './Contact.module.css';
import React from 'react';




export default function Contact() {




    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1}>Pokemón Proyecto Individual</h1>
            <div className={styles.box}>

                <p className={styles.p}>¡Leonardo Ezequiel Carofiglio!</p>
                <div className={styles.scroll}>
                    <span className={styles.span}>
                        Saludos, mi nombre es Leonardo Ezequiel Carofiglio, un entusiasta estudiante de Desarrollo Web Full Stack. A mis 28 años, llamo hogar a la zona sur del conurbano bonaerense.
                        <br />
                        Mi objetivo es que, al leer estas palabras, ya haya culminado mi formación académica.
                        <br />
                        <br />

                        Agradezco de antemano tu visita a mi Proyecto Individual durante mi etapa en HENRY Labs. ¡Espero que disfrutes explorándolo!
                        <br />
                        Si estás interesado en colaborar en proyectos o necesitas asistencia, no dudes en ponerte en contacto conmigo.
                        <br />
                        <p className={styles.contact}>Puedes escribirme a leonardo.carofiglio@hotmail.com</p>
                        <br />
                        o conectarte a través de: <p className={styles.contact}>WhatsApp al 011 5142 5818.</p>
                        <br />
                        <a href="https://github.com/Forastero078">LINK A MI GITHUB</a>
                        <br />
                        Muchas gracias por tu tiempo, espero podamos hacer proyectos conjuntos en un futuro!
                    </span>

                </div>
                <img className={styles.img} src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg" alt="FullStack" />

                <img className={styles.img2} src="https://myblogtime.com/wp-content/uploads/2020/08/Full-Stack-Web-Development-1.png" alt="WebDeveloper" />
            </div>
        </div>
    )
}