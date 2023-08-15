const { Pokemon } = require('../db');



const createPokemon = async(req, res) => {

    const { name, 
        image, 
        hp, 
        attack, 
        defend, 
        speed, 
        height, 
        weight,
    pokeTypes } = req.body


    try{

        const newChar = await Pokemon.create({
            name: name,
            image: image,
            hp: hp,
            attack: attack,
            defend: defend,
            speed: speed,
            height: height,
            weight: weight,
            pokeTypes: pokeTypes
        });

        res.status(200).json(newChar.toJSON())

    } catch(error) {
        res.status(400).json({error: error.message})
    }
};

// sin mucho que comentar, recibe la data por body y envia una respuesta json del pokemon creado


module.exports = {
    createPokemon
}