import styles from './SearchBar.module.css';
import React from 'react';





export default function SearchBar(props){

const { handlePrevPage, 
    handleNextPage, 
    handleGoToPage, 
    currentPage, 
    totalPages } = props



    return(
        <div>
            <div className={styles.searchBar}>
                <button onClick={handlePrevPage}>Atras</button>
                <p>{currentPage} de {totalPages}</p>
                <button onClick={handleNextPage}>Siguiente</button>

            </div>
        </div>
    )
}