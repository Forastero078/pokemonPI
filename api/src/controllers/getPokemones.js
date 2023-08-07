const axios = require('axios');
const { Pokemondb } = require('../db')



const getPokemones = async (req, res) => {

   try {
            const response = await Pokemondb.findAll();

            const sortResponse = response.sort((a,b) => a.id - b.id);

            res.status(200).json(sortResponse);
        
    } catch(error){
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    getPokemones
}