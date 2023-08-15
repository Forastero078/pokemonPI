const { Pokemondb } = require('../db.js')



const getPokemonByName = async(req, res) => {

    const { name } = req.query;


    try {
           

        const dbResult = await Pokemondb.findOne({ where: { name: name } });



        
        if(dbResult){
              res.status(200).json(dbResult); 
        } else {
            throw new Error('No hay Pokemons con ese nombre')
        }

    } catch(error){

        res.status(400).json({error: error.message});

    }
}

// busca el pokemon de la base de datos por name y lo devuelve en response
module.exports = {
    getPokemonByName
}