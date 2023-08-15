import styles from './MyPokemons.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Botonera from '../Botonera/Botonera';
import { useSelector } from 'react-redux';



export default function MyPokemons(){

    const [ characters, setCharacters ] = useState([]);

    const myPokemons = useSelector((state) => state.myPokemons);

    useEffect(() => {        
        setCharacters(myPokemons);
    }, [myPokemons]);

    
        

    return(

        
        <div className={styles.divPadre}>

            <div className={styles.scroll}>

                <div className={styles.cards}>

                {!characters.length && <div className={styles.box}>
                        <div className={styles.space}>
                            <div className={styles.loading}></div>
                        </div>
                    </div>}

            {(characters.length > 0) && characters.map((element) => {
               const pokeType = [{type: {name: element.pokeTypes[0]}}]
               const sprites = {
                other: {
                   dream_world: {
                    front_default: element.image
                   }
                }
            }
            return <Card
            key={element.id + element.name}
            myPokemon={true}
            id={element.id}
            name={element.name}
            sprites={sprites}
            types={pokeType}
            
            />
            }
        )}
            </div>
            </div>

            <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" />
                
                
                    

                    <Botonera />


                               

                               </div>
    )
}