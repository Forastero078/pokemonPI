const { Pokemondb } = require('../db');
const axios = require('axios');




const guardarPokemones = async() => {

    try {

        const count = await Pokemondb.count();

        if (!count) {


            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
            const { data } = response;

            const toDetail = data.results.map((element) => axios.get(element.url));

            const allPokemonDataResponses = await Promise.all(toDetail);

            const allPokemons = allPokemonDataResponses.map((response) => response.data);


             allPokemons.map((element) => {
                 Pokemondb.create({ id: element.id,
                                  name: element.name,
                                  sprites: element.sprites,
                                  stats: element.stats,
                                  weight: element.weight,
                                  height: element.height,
                                  pokeTypes: element.types })
            })
            
            // hace un get de los pokemones del 0 al 1000, los mapea y hace un get por cada uno para trarse
            // la info detallada, espera a que se cumplan todas las promises, guarda la data en la variable
            //AllPokemons y la mapea para guardar cada registro
            
            console.log('Pokemons cargados a la base de datos');
        } else {
        console.log('La base de datos esta completa');
        }

} catch (error) {
    console.log({error: error.message})
}

}


module.exports = {
    guardarPokemones
}