const { Pokemondb } = require('../db');
const axios = require('axios');




const pokemonToDetail = async() => {

    try {

        const count = await Pokemondb.count();

        if (!count) {


            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=500')
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
        } 
} catch (error) {
    console.log({error: error.message})
}

}


module.exports = {
    guardarPokemones
}