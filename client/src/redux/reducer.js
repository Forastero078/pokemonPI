import { ADD_ALLPOKEMONS, ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions";



const initialState = {

    allPokemons: [],
    myPokemons: [],
    myPokemonsBUp: []
}



export default function rootReducer(state = initialState, { type, payload }){
    switch(type){
        case ADD_ALLPOKEMONS:
            return {
                ...state,
                allPokemons: [...payload]
            }
        case ADD_FAVORITE:
            return {
                ...state,
                myPokemons: [...payload],
                myPokemonsBUp: [...payload]
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myPokemons: [...payload]
            }

        case FILTER:
            const { allPokemons } = state;

            if(payload === 'Todos los Pokemones'){
                return {
                    ...state,
                    myPokemons: [...allPokemons]
                }
            }

            let filter = allPokemons.filter((element) => element.types.type.name === payload);

            return {
                ...state,
                myPokemons: [...filter]
            }

        case ORDER:

        let charsSort;
        
        // let allChar;
        // if(state) allChar = state.allCharacters 
        if(payload === 'Ascendente'){
            let { allCharacters } = state;
            charsSort = allCharacters.sort((a,b) => a.id - b.id )
        } else if (payload === 'Descendente'){
            let { allCharacters } = state;
         charsSort = allCharacters.sort((a,b) => b.id - a.id );
        }

        return {
            ...state,
            myFavorites: [...charsSort]
        };
        default:
            return state;
    }
}