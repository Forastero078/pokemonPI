import styles from './Home.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';



export default function Home(props) {

    const dispatch = useDispatch();

    const globalState = useSelector((state) => state.allPokemons);

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPorPagina = 12;
    const totalElements = 1000;
    const totalPages = Math.ceil(totalElements / cardsPorPagina);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * cardsPorPagina;
        const endIndex = startIndex + cardsPorPagina;
        return characters.slice(startIndex, endIndex);
    }

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    function handleGoToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    }






    const { onSearch, onSearchR, clean } = props;

    useEffect(() => {
        setCharacters([...globalState])
    }, [globalState]);




    return (


        <div className={styles.divPadre}>

            <SearchBar handlePrevPage={handlePrevPage} 
            handleNextPage={handleNextPage} 
            handleGoToPage={handleGoToPage} 
            currentPage={currentPage} 
            totalPages={totalPages}/>

            <div className={styles.scroll}>

                <div className={styles.cards}>
                    {getCurrentPageItems().map((element) => {

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








        </div>
    )
}