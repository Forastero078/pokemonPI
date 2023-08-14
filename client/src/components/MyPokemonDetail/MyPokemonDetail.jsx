import axios from 'axios';
import styles from './MyPokemonDetail.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




export default function MyPokemonDetail(props) {

    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    const { detailId } = useParams();



    useEffect(() => {

        return async function () {
            try {
                const response = await axios.get(`http://localhost:3001/mypokemons/${detailId}`);

                setCharacter({ ...response.data })
            } catch (error) {
                alert('Error');
                console.log({ error: error.message });
            }
        }();


    }, [detailId]);

    const {
        id,
        name,
        image,
        hp,
        attack,
        defend,
        speed,
        height,
        weight,
        pokeTypes
    } = character;





    let nombre;
    if (name) {
        nombre = name[0].toUpperCase() + name.slice(1);
    }

    const realWeight = String(weight)[0] + '.' + String(weight).slice(1);

    const realHeight = () => {
        if (String(height).length >= 1) {
            return '0.' + String(height);
        } else {
            return String(height)[0] + '.' + String(height).slice(1);
        }
    }



    return (

        <div className={styles.popup}>

            <div className={styles.detail}>






                <div onClick={() => navigate(-1)} className={styles.close_container}>
                    <div className={styles.leftright}></div>
                    <div class={styles.rightleft}></div>
                    <label className={styles.close}>cerrar</label>
                </div>






                <img className={styles.type1} src={image} alt={name} />


                <p className={styles.type4}><span className={styles.name}>{nombre}</span></p>

                <div className={styles.info}>

                    <div className={styles.stats}>
                        <p className={styles.type2}>Pokemón Stat's:</p>
                        <p className={styles.type3}>hp: <span className={styles.base_stat}>{hp}</span> </p>
                        <p className={styles.type3}>attack: <span className={styles.base_stat}>{attack}</span> </p>
                        <p className={styles.type3}>defend: <span className={styles.base_stat}>{defend}</span> </p>
                        <p className={styles.type3}>speed: <span className={styles.base_stat}>{speed}</span> </p>

                    </div>


                    <p className={styles.weightAndHeight}>Peso: <span className={styles.peso}>{realWeight}</span>kg
                        <br />
                        Altura: <span className={styles.altura}>{realHeight()}</span>mts</p>

                    <p className={styles.type}><p className={styles.type2}>Pokemón type's: </p>{pokeTypes && pokeTypes.map((element) => {
                        return <p className={styles.type3}>.-type:<span className={styles.types}>  {element[0].toUpperCase() + element.slice(1)}  </span></p>
                    })}
                    </p>




                </div>


            </div>


        </div>
    )
}