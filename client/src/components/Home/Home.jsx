import styles from './Home.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards } from '../../redux/actions';
import BotoneraPaginador from '../BotoneraPaginador/BotoneraPaginador';
import axios from 'axios';




export default function Home(props) {

    const dispatch = useDispatch();

    const globalState = useSelector((state) => state.allPokemons);

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState(false);

    const cardsPorPagina = 12;
    const totalElements = 1000;
    const totalPages = Math.ceil(totalElements / cardsPorPagina);

    const onSearch = async (name) => {
        if (search) {
            try {
                const response = await axios.get(`http://localhost:3001/pokemons/${name}`);


                setCharacters([response.data]);

            } catch (error) {
                console.log({ error: error.message })
            }


        }
    }

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

    const handlerType = (e) => {
       dispatch(filterCards(e.target.value))
    }






    useEffect(() => {
        if (!search) {
            setCharacters([...globalState])
        }
    }, [globalState, search]);




    return (


        <div className={styles.divPadre}>

            <BotoneraPaginador
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handleGoToPage={handleGoToPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                onSearch={onSearch}

                search={search}
                setSearch={setSearch} />



            <div className={styles.scroll}>

                <select name='Types de Pokemóns' className={styles.select} onChange={handlerType}>
                    <option value="Todos los Pokemónes">Todos los Pokemónes</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="poison">Poison</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="normal">Normal</option>
                </select>

                <select name='Types de Pokemóns' className={styles.select} onChange={handlerType}>
                    <option value="Todos los Pokemónes">Todos los Pokemónes</option>
                    </select>

                <div className={styles.cards}>

                    {!characters.length && <div className={styles.box}>
                        <div className={styles.space}>
                            <div className={styles.loading}></div>
                        </div>
                    </div>}


                    {characters.length && getCurrentPageItems().map((element) => {

                        return <Card
                            id={element.id}
                            name={element.name}
                            sprites={element.sprites}
                            types={element.pokeTypes}
                        />
                    }
                    )}

                </div>

            </div>



            <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" />








        </div>
    )
}