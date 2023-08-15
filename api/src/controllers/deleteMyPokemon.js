const { Pokemon } = require('../db')



const deleteMyPokemon = async (req, res) => {

    const { id } = req.params;

   try {
            const response = await Pokemon.destroy({
                where: {
                  id: Number(id)
                }
              })
              .then((PokemonsEliminados) => {
                if(PokemonsEliminados > 0){
                    res.status(200).json({id: Number(id)});
                } else {
                    res.status(400).json('Ha ocurrido un error');
                }
            })

            
        
    } catch(error){
        res.status(400).json({error: error.message});
    }
}


//recibe id por params, elimina de la base de datos el pokemon, en caso de exito devuelve un objecto con la
// propiedad id cuyo valor es el numero de id para posterior filtrado en redux en Front


module.exports = {
    deleteMyPokemon
}