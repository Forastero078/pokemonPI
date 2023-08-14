const { Pokemon } = require('../db')



const getMyPokemons = async (req, res) => {

   try {
            const response = await Pokemon.findAll();

            // const sortResponse = response.sort((a,b) => a.id - b.id);

            res.status(200).json(response);
        
    } catch(error){
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    getMyPokemons
}