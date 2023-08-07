const { Pokemondb } = require('../db');





const getCharByIdOrName = async(req, res) => {
    const { idOrName } = req.params;

    let searchByNameOrID;

    try {

        if(isNaN(idOrName)){
        searchByNameOrID = await Pokemondb.findOne({ where: { name: idOrName } });
        } else {
        searchByNameOrID = await Pokemondb.findOne({ where: { id: Number(idOrName) } });
        }

    
    
  
          res.status(200).json({
            
                id: searchByNameOrID.id,
                name: searchByNameOrID.name,
                sprites: searchByNameOrID.sprites,
                stats: searchByNameOrID.stats,
                weight: searchByNameOrID.weight,
                height: searchByNameOrID.height,
                types: searchByNameOrID.types
            
          })
        } catch(error) {
             res.status(400).json({error: error.message})
        }
}

module.exports = {
    getCharByIdOrName
}