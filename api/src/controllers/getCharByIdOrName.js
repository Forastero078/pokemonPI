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

        //primero se fija si es un valor numerico, y guarda la respuesta de la DB en la variable searchByNameOrID

    
    
  
          res.status(200).json({
            
                id: searchByNameOrID.id,
                name: searchByNameOrID.name,
                sprites: searchByNameOrID.sprites,
                stats: searchByNameOrID.stats,
                weight: searchByNameOrID.weight,
                height: searchByNameOrID.height,
                pokeTypes: searchByNameOrID.pokeTypes
            
          })
        } catch(error) {
             res.status(400).json({error: error.message})
        }
}


//devuelve un objeto con la informacion del pokemon que buscamos
module.exports = {
    getCharByIdOrName
}