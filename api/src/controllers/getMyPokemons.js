const { Pokemon } = require('../db')



const getMyPokemons = async (req, res) => {

   try {
            const response = await Pokemon.findAll();

            

            res.status(200).json(response);
        
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

// devuelve una response con todos los registros de los pokemones creados


module.exports = {
    getMyPokemons
}