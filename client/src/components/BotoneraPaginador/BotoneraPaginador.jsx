import styles from './BotoneraPaginador.module.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';





export default function BotoneraPaginador(props) {


    const { 
        handlePrevPage,
        handleNextPage,
        handleGoToPage,
        currentPage,
        totalPages,
        search,
        setSearch,
        onSearch } = props;

    const changePage = (e) => {
        handleGoToPage(e.target.value)
    }



    return (
        <div>
            <div className={styles.searchBar}>
                <div className={styles.botones}>
                    <button className={styles.atrasAdelante} onClick={handlePrevPage}>Atras</button>
                    <p className={styles.p}><input type='number' className={styles.currentPage} onChange={changePage} value={currentPage} /> de {totalPages}</p>
                    <button className={styles.atrasAdelante} onClick={handleNextPage}>Siguiente</button>
                </div>


                <SearchBar onSearch={onSearch} searchState={search} setSearchState={setSearch} />

            </div>






        </div>
    )
}