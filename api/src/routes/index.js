const { getCharByIdOrName } = require("../controllers/getCharByIdOrName.js");
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { newUser } = require('../controllers/newUser.js')
const { getPokemones } = require('../controllers/getPokemones.js')
const { getPokemonByName } = require('../controllers/getPokemonByName')
const { Router } = require("express");
const { createPokemon } = require("../controllers/createPokemon.js");
const { getTypes } = require('../controllers/getTypes.js')
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

router.post('/pokemons/login', (req, res) => { // login
    return login(req, res);
});

router.post('/pokemons/', (req, res) => { // Crear Pokemon
    return createPokemon(req, res);
});

router.get('/types', (req, res) => { // Todos los types de Pokemones
    return getTypes(req, res);
});

// router.post('/pokemons/newuser', (req, res) => {
//     return newUser(req, res);
// });

// router.post('/pokemons/fav', (req, res) => {
//     return postFav(req, res);
// });

// router.delete('/pokemons/fav/:id', (req, res) => {
//     return deleteFav(req, res);
// });


module.exports = {
    router
};
