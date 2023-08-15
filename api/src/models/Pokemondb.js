const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemondb', {          
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // tipo numerico, primaryKey
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // tipo string, notNull
    },
    sprites: {
      type: DataTypes.JSON,
      allowNull: false // tipo objecto, notNull
    },
    stats: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false // tipo array de objectos
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false  // tipo numerico, notNull
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    pokeTypes: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false  // tipo arreglo de objectos
    }
  },
  {
    timestamps: false,
    createdAt: false,
  });
};
