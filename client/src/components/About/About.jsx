import styles from './About.module.css';
import React from 'react';






export default function About() {







    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1}>Pokemón Proyecto Individual</h1>
            <div className={styles.box}>

                <p className={styles.p}>¡Bienvenido a PokemonApp!</p>
                <div className={styles.scroll}>
                    <span className={styles.span}>Soy un estudiante que ha creado un emocionante proyecto Front-End/Back-End/SQL con la temática de Pokémon. La base de datos está alimentada por la increíble PokeAPI y construida utilizando modelos de Sequelize.
                        <br />
                        <br />

                        En el lado del Front-End, he utilizado herramientas de última generación como create-react-app, React, Redux y JS, junto con estilos en módulos CSS para ofrecerte una experiencia visualmente atractiva y fluida.
                        <br />
                        <br />

                        El Back-End está impulsado por Express y Sequelize, dos tecnologías robustas que permiten gestionar eficientemente los datos y las operaciones en la base de datos PostgreSQL.
                        <br />
                        <br />

                        Lo más emocionante es que te ofrecemos un lugar donde puedes sumergirte en el universo Pokémon. Explora el listado completo con más de 1000 Pokémon, cada uno con sus propias estadísticas únicas, desde vida hasta ataque y defensa.
                        <br />
                        <br />
                        Te brindamos la posibilidad de filtrarlos por tipos y poder de ataque, y también te invitamos a explorarlos en orden alfabético.
                        <br />
                        <br />

                        ¡Pero eso no es todo! Además, hemos incorporado una función que te permite dar vida a tu propio Pokémon. Imagina y crea tu Pokémon personalizado asignándole un nombre, una imagen y definiendo sus estadísticas.
                        <br />
                        ¿Tienes curiosidad por saber qué Pokémon has creado? Puedes visitar la sección "myPokémons" para ver una lista de tus creaciones.
                        <br />
                        <br />
                        Este proyecto es el resultado del esfuerzo individual de un apasionado estudiante de la Carrera Full Stack Web Developer de HENRY.
                        <br />
                        <br />
                        Cada línea de código, cada detalle visual y cada función incorporada son testimonios del amor y la dedicación invertidos.
                        <br />
                        <br />
                        Esperamos que disfrutes de tu tiempo explorando y jugando con la App tanto como he disfrutado creándola.
                        <br />
                        ¡Bienvenido a PokemonApp, donde el mundo de los Pokémon cobra vida de una manera única!
                        <br />
                        <br />
                        ¡Disfruta al máximo!
                    </span>
                    
                </div>
                <img className={styles.img} src="https://www.namasteui.com/wp-content/uploads/2019/07/Full-Stack-Developer.jpg" alt="FullStack" />

                <img className={styles.img2} src="https://wallpaperaccess.com/full/487135.jpg" alt="Pokemon" />
            </div>
        </div>
    )
}