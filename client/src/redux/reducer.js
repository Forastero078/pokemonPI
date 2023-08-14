import { ADD_ALLPOKEMONS, ADD_MYPOKEMONS, DELETE_MYPOKEMON, FILTER, ORDER } from "./actions";



const initialState = {

    allPokemons: [],
    allPokemonsBUp: [],
    myPokemons: [],
    myPokemonsBUp: []
    
}



export default function rootReducer(state = initialState, { type, payload }){
    switch(type){
        case ADD_ALLPOKEMONS:
            return {
                ...state,
                allPokemons: [...payload],
                allPokemonsBUp: [...payload]
            }
        case ADD_MYPOKEMONS:
            return {
                ...state,
                myPokemons: [...payload],
                myPokemonsBUp: [...payload]
            }

        case DELETE_MYPOKEMON:
            return {
                ...state,
                myPokemons: [...payload]
            }

        case FILTER:
            const { allPokemonsBUp } = state;
            console.log({payload: payload})

            if(payload === 'Todos los Pokemónes'){
                return {
                    ...state,
                    allPokemons: [...state.allPokemonsBUp]
                }
            }
            
                let filter = allPokemonsBUp.filter((element) => {
                    return element.pokeTypes[0].type.name === payload
                })
            
            

            return {
                ...state,
                allPokemons: [...filter]
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