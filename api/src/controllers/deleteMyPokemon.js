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



module.exports = {
    deleteMyPokemon
}