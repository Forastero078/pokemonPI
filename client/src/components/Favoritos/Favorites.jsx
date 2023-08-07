import styles from './Favorites.module.css';
import React from 'react';
import Card from '../Card/Card';
import Botonera from '../Botonera/Botonera';
import Detail from '../Detail/Detail';
import { character } from '../../character';



export default function Favorites(props){

    const { characters, onSearch, onSearchR, clean } = props;

    
    
    

    return(

        
        <div className={styles.divPadre}>

            <div className={styles.scroll}>

                <div className={styles.cards}>
            { characters.map((element) => {
               
            return <Card
            id={element.id}
            name={element.name}
            sprites={element.sprites}
            />
            }
        )}
            </div>
            </div>

            <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" />
                
                
                    <Botonera onSearch={onSearch} onSearchR={onSearchR} clean={clean}/>

                    


                               

                               </div>
    )
}