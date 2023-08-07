const { getCharByIdOrName } = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { Router } = require("express");

const router = Router();


router.get('/pokemons/character/:id', (req, res) => {
    return getCharByIdOrName(req, res);
});

router.get('/pokemons/login', (req, res) => {
    return login(req, res);
});

router.post('/pokemons/fav', (req, res) => {
    return postFav(req, res);
});

router.delete('/pokemons/fav/:id', (req, res) => {
    return deleteFav(req, res);
});


module.exports = {
    router
};