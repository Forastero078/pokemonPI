import axios from 'axios';

export const ADD_ALLPOKEMONS = 'ADD_ALLPOKEMONS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
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

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/pokemon/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
         
          return dispatch({
             type: ADD_FAVORITE,
             payload: data,
          });
       });
    };
 };

 export const deleteFavorite = (id) => {
    const endpoint = 'http://localhost:3001/pokemon/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FAVORITE,
             payload: data,
       });
       });
    };
 };

 export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
};