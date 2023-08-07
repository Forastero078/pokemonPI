const { pool } = require('../pool');



const newUser = async(req,res) => {

    try {
        const { usuario, password } = req.body;

        const query = 'INSERT INTO usuarios (usuario, password) VALUES ($1,$2) RETURNING *'
        const values = [ usuario, password];
        
        const result = await pool.query(query, values);

        res.status(201).json(result);
  } catch (error) {
    console.error('Error al guardar el usuario y contraseña:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
    };


    module.exports = {
        newUser
    };
