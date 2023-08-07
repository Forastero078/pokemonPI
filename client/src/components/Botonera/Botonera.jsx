import styles from './Botonera.module.css';
import React, { useState } from 'react';





export default function Botonera(props){

    const { onSearch, onSearchR, clean } = props;

    const [ id, setId ] = useState('');


    const handlerInput = (event) => {
        setId(event.target.value)
        console.log(id);
    }




    return(
        <div className={styles.botonera}>


        <div className={styles.buscarXId} >
                
        <p className={styles.pId}>Selecciona un
        <br/>
        Pokemón por Id</p>
        <br/>
        <div className={styles.searchId}>
        <input className={styles.input} name='id' value={id} onChange={handlerInput}/>
        <button className={styles.searchIdButton} onClick={() => onSearch(id)}>Buscar</button>
        </div>
        
        </div>  
         

            
        <div className={styles.buscarRandomButton} onClick={onSearchR}>
            <p className={styles.pRandom}>Selecciona un 
            <br/>
            Pokemón al Azar</p>

            </div>  
        
        <div className={styles.buscarRandomButton} onClick={clean}>
            <p className={styles.pClean}>Limpiar Tablero</p>

            </div>  
            
           </div>
            
           
            
    )
}