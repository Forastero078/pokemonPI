import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Portada from './components/Portada/Portada';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favoritos/Favorites';
import { character } from './character';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { allPokemons } from './redux/actions';

function App() {

  const [access, setAccess] = useState(true); // ---> poner en false

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const usuario = 'leonardo.carofiglio@hotmail.com';
  const contraseña = 'Henry1234';

  const login = async(userData) => {
    const { username, password } = userData
    
    if (username === usuario && password === contraseña) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('El usuario o la contraseña es incorrecto')
    }
  }

  

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  useEffect(() => {
    dispatch(allPokemons());
    },[]);

  const onSearch = async (character) => {
    let filter = characters.filter((e) => e.id === Number(character));

    if (filter.length >= 1) return alert('Ya tienes ese personaje');

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${character}`)

      setCharacters((oldChars) => [...oldChars, response.data]);

    } catch (error) {
      console.log({ error: error.message });
      alert('No hay Pokemóns con ese ID');
    }
  };

  const onSearchR = async () => {

    const random = Math.floor(Math.random() * 1010);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(random)}`);

      setCharacters((oldChars)=> [...oldChars, response.data])
    } catch(error) {
      console.log({error: error.message});
      alert('Ha ocurrido un error');
    }
  };

  const clean = () => {
    setCharacters([]);
  }


  return (
    <div className={styles.app}>


      <div className={styles.navbar}>
        {location.pathname !== '/' && <NavBar />}
      </div>

      <div className={styles.contenido}>
        <Routes>
          <Route exact path='/' element={<Portada login={login} />} />
          <Route path='/home' element={<Home characters={characters} onSearch={onSearch} onSearchR={onSearchR} clean={clean}/>} />
          <Route path='/detail/:detailId' element={<Detail/>} />
          <Route path='/fav' element={<Favorites characters={characters} onSearch={onSearch} onSearchR={onSearchR} clean={clean}/>} />
          <Route path='/*' element={'404'} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
