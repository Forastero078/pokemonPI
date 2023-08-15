import { ADD_ALLPOKEMONS, ADD_MYPOKEMONS, DELETE_MYPOKEMON, FILTER, ORDER_ALFABETICO, ORDER_ATTACK } from "./actions";



const initialState = {

    allPokemons: [],
    allPokemonsBUp: [],
    myPokemons: [],
    myPokemonsBUp: []

}



export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
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

            const filtrado = state.myPokemons.filter((element) => element.id !== payload.id)
            return {
                ...state,
                myPokemons: filtrado,
                
            }

        case FILTER:
            const { allPokemonsBUp } = state;
            console.log({ payload: payload })

            if (payload === 'Todos los Pokemónes') {
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

        case ORDER_ALFABETICO:

            let charSort;
            if (payload === 'orden alfabetico') {
                return { ...state }
            }

            if (payload === 'ascendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => a.name.localeCompare(b.nombre))
            } else if (payload === 'descendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                allPokemons: [...charSort]
            };
        case ORDER_ATTACK:

            let charsSort;

            if (payload === 'ascendente') {
                let { allPokemons } = state;
                charsSort = allPokemons.sort((a, b) => a.stats[1].base_stat - b.stats[1].base_stat)
            } else if (payload === 'descendente') {
                let { allPokemons } = state;
                charsSort = allPokemons.sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
            }

            return {
                ...state,
                allPokemons: [...charsSort]
            };
        default:
            return state;
    }
}