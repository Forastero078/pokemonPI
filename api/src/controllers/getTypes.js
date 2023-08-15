const axios = require('axios');
const { Type } = require('../db')



const getTypes = async (req, res) => {

    try {

        
            const response = await Type.findAll();

            const sortResponse = response.sort((a,b) => a.id - b.id)

            res.status(200).json(sortResponse)
    
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

// busca todos los types en la DB, los ordena y los devuelve en la response


module.exports = {
getTypes
}