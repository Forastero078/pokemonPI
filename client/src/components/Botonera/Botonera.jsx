import { useDispatch } from 'react-redux';
import styles from './Botonera.module.css';
import React, { useState } from 'react';
import { addMyPokemons, deleteMyPokemon } from '../../redux/actions';





export default function Botonera(){

    const dispatch = useDispatch();

   
    const [ id, setId ] = useState('');


    const handlerInput = (event) => {
        setId(event.target.value)
        
    }

    const onSearch = (id) => {
    
      dispatch(deleteMyPokemon(id));       
        
    }


    return(
        <div className={styles.botonera}>


        <div className={styles.buscarXId} >
                
        <p className={styles.pId}>Elimina un
        <br/>
        Pokemón por Id</p>
        <br/>
        <div className={styles.searchId}>
        <input className={styles.input} name='id' value={id} onChange={handlerInput}/>
        <button className={styles.searchIdButton} onClick={() => onSearch(id)}>Eliminar</button>
        </div>
        
        </div>  
         

            
          
            
           </div>
            
           
            
    )
}