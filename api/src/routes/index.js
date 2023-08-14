const { getCharByIdOrName } = require("../controllers/getCharByIdOrName.js");
const { login } = require('../controllers/login');
const { getPokemones } = require('../controllers/getPokemones.js');
const { getMyPokemons } = require('../controllers/getMyPokemons.js');
const { deleteMyPokemon } = require('../controllers/deleteMyPokemon.js');
const { getMyPokemonDetail } = require('../controllers/getMyPokemonDetail.js');
const { getPokemonByName } = require('../controllers/getPokemonByName');
const { createPokemon } = require("../controllers/createPokemon.js");
const { getTypes } = require('../controllers/getTypes.js');
const { Router } = require("express");
const router = Router();



router.get('/pokemons/name', (req, res) => { // Pokemon por nombre mediante query
    return getPokemonByName(req, res);
}); 

router.get('/pokemons/:idOrName', (req, res) => { // Pokemon por nombre o ID
    return getCharByIdOrName(req, res);
});    

router.get('/pokemons/', (req, res) => { // Todos los pokemones
    return getPokemones(req, res);
});

router.get('/mypokemons', (req, res) => { // Todos los pokemones creados
    return getMyPokemons(req, res);
});

router.delete('/mypokemons/:id', (req, res) => { // Elimina un Pokemon creado
    return deleteMyPokemon(req, res);
});

router.post('/pokemons/login', (req, res) => { // login
    return login(req, res);
});

router.post('/pokemons/', (req, res) => { // Crear Pokemon
    return createPokemon(req, res);
});

router.get('/mypokemons/:idOrName', (req, res) => { // Pokemon por nombre o ID
    return getMyPokemonDetail(req, res);
});    

router.get('/types', (req, res) => { // Todos los types de Pokemones
    return getTypes(req, res);
});





module.exports = {
    router
};
