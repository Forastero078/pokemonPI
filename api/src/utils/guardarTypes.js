const axios = require('axios');
const { Type } = require('../db');


const guardarTypes = async() => {

    try {
    const count = await Type.count();

        if (!count) {


            const response = await axios.get('https://pokeapi.co/api/v2/type')
            const { data } = response;

             data.results.map((element) => {
                 Type.create({ name: element.name })
            })

            console.log('Types cargados en la base de datos')
        } else {
            console.log('Los types de la base de datos esta completa')
        }
    } catch (error) {
        console.log({error: error.message})
    }
};

module.exports = {
    guardarTypes
}
