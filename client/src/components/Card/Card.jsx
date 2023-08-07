import styles from './Card.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Card(props) {

    const [ isFav, setIsFav ] = useState(false)
    const {
        id,
        name,
        sprites,
        // species,
        // weight,
        // height,
        // types
    } = props;

    const nombre = name[0].toUpperCase() + name.slice(1);





    return (


        <div className={styles.divPadre}>
                    <div className={styles.buttons}>
                    <div className={styles.fav}>
                        
                        <span className={styles.like} onClick={()=> alert('emulacion')}>{isFav ? '❤ Favorite' : '♡ AddFavorite'}</span>
                    </div>

                    </div>
            <Link className={styles.link} to={`/detail/${id}`}>

                <div className={styles.card}>


                    <img className={styles.img} src={Number(id) < 650 ? sprites.other.dream_world.front_default : sprites['other']['official-artwork']['front_default']} alt={id + name} />
                    {/* <h1 className={styles.id}> {id} </h1> */}
                    <h1 className={styles.name}> {nombre} </h1>

                </div>

            </Link>
        </div>
    )
}
