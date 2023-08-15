import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Portada from './components/Portada/Portada';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import MyPokemons from './components/MyPokemons/MyPokemons';
import Form from './components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { allPokemons, addMyPokemons } from './redux/actions';
import  MyPokemonDetail  from './components/MyPokemonDetail/MyPokemonDetail';
import About from './components/About/About';

function App() {

  const [access, setAccess] = useState(true); // ---> poner en false

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.myPokemons);

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

  useEffect(() => {
    dispatch(addMyPokemons());
  },[]);

 
  

  return (
    <div className={styles.app}>


      <div className={styles.navbar}>
        {location.pathname !== '/' && <NavBar />}
      </div>


      <div className={styles.contenido}>
        <Routes>
          <Route exact path='/' element={<Portada login={login} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail/>} />
          <Route path='/mypokemondetail/:detailId' element={<MyPokemonDetail/>} />
          <Route path='/myPokemons' element={<MyPokemons/>} />
          <Route path='/create' element={<Form/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={'404'} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
