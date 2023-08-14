const { Pokemon } = require('../db');





const getMyPokemonDetail = async(req, res) => {
    const { idOrName } = req.params;

    let searchByNameOrID;

    try {

        if(isNaN(idOrName)){
        searchByNameOrID = await Pokemon.findOne({ where: { name: idOrName } });
        } else {
        searchByNameOrID = await Pokemon.findOne({ where: { id: Number(idOrName) } });
        }

    
    
             res.status(200).json(searchByNameOrID)
        //   res.status(200).json({
            
        //         id: searchByNameOrID.id,
        //         name: searchByNameOrID.name,
        //         sprites: searchByNameOrID.sprites,
        //         stats: searchByNameOrID.stats,
        //         weight: searchByNameOrID.weight,
        //         height: searchByNameOrID.height,
        //         pokeTypes: searchByNameOrID.pokeTypes
            
        //   })
        } catch(error) {
             res.status(400).json({error: error.message})
        }
}

module.exports = {
    getMyPokemonDetail
}