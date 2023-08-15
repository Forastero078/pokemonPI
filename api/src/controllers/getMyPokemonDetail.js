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

        } catch(error) {
             res.status(400).json({error: error.message})
        }
}

//Primero se fija que sea un valor numerico o no, guarda la respuesta en la variable y la devuelve 


module.exports = {
    getMyPokemonDetail
}