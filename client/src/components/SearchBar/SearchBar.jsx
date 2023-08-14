import styles from './SearchBar.module.css';
import React, { useState } from 'react';





export default function SearchBar(props) {

    const {
        onSearch,
        searchState,
        setSearchState } = props;

    const [search, setSearch] = useState('');

    

    const handleChange = (e) => {
        const newSearchValue = e.target.value;
        setSearch(newSearchValue);

        if (newSearchValue === '') {
            setSearchState(false);
        } else {
            setSearchState(true);
        }
        
    }

    const handleSearch = () => {
        setSearchState(true)
        if (searchState) {
            
            onSearch(search)
            
        }
    }








    return (
        <div className={styles.box}>

            <button className={styles.button} onClick={handleSearch}>Buscar</button>
            <input className={styles.input} type='text' name='search' value={search} placeholder='Busca un pokemon' onChange={handleChange} />

        </div>
    )
}