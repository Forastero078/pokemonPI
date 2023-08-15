import styles from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import handlerTypeColor from './handlerTypeColor.js';



export default function Card(props) {


    const {
        id,
        name,
        sprites,
        types,
        myPokemon
        

    } = props;

    const nombre = name[0].toUpperCase() + name.slice(1);





    return (


        <div className={styles.divPadre}>
            <div className={styles.buttons}>
                <div className={styles.fav}>

                </div>



            </div>
            <Link className={styles.link} to={myPokemon ? `/mypokemondetail/${id}` : `/detail/${id}`}>

                <div className={styles.card} >

                    <p className={styles.id}>#{id}</p>



                    <img className={styles.img} src={Number(id) < 650 ? sprites.other.dream_world.front_default : sprites['other']['official-artwork']['front_default']} alt={id + name} />

                    <section className={handlerTypeColor(types)}>
                        <h1 className={styles.name}> {nombre} </h1>
                    </section>
                </div>

            </Link>
        </div>
    )
}
