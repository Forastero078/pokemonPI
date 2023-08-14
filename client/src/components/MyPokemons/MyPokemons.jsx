import styles from './MyPokemons.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Botonera from '../Botonera/Botonera';
import { addMyPokemons, deleteMyPokemon } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



export default function MyPokemons(){

    const [ characters, setCharacters ] = useState([]);

    const dispatch = useDispatch();

    const myPokemons = useSelector((state) => state.myPokemons);


    useEffect(() => {
        setCharacters([...myPokemons]);
    }, [myPokemons]);

    
    const sprites = {
        other: {
           dream_world: {
            front_default: ''
           }
        }
    }
    

    return(

        
        <div className={styles.divPadre}>

            <div className={styles.scroll}>

                <div className={styles.cards}>

            {characters.length && characters.map((element) => {
               const pokeType = [{type: {name: element.pokeTypes[0]}}]
               const sprites = {
                other: {
                   dream_world: {
                    front_default: element.image
                   }
                }
            }
            return <Card
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