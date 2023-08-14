import axios from 'axios';

export const ADD_ALLPOKEMONS = 'ADD_ALLPOKEMONS';
export const ADD_MYPOKEMONS = 'ADD_MYPOKEMONS';
export const DELETE_MYPOKEMON = 'DELETE_MYPOKEMON';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const allPokemons = () => {
   
   return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/pokemons/`);
        const { data } = response;

               

   
      return dispatch({
         type: ADD_ALLPOKEMONS,
      payload: data
     })  
   
 }
 }

export const addMyPokemons = () => {
    const endpoint = 'http://localhost:3001/mypokemons/';
    return (dispatch) => {
       axios.get(endpoint).then(({ data }) => {
         
          return dispatch({
             type: ADD_MYPOKEMONS,
             payload: data,
          });
       });
    };
 };

 export const deleteMyPokemon = (id) => {
    const endpoint = `http://localhost:3001/mypokemons/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_MYPOKEMON,
             payload: data,
       });
       });
    };
 };

 export const filterCards = (pokeTypes) => {
    return {
        type: FILTER,
        payload: pokeTypes
    }
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
};