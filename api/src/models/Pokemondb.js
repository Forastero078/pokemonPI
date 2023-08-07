const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemondb', {          
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprites: {
      type: DataTypes.JSON,
      allowNull: false
    },
    stats: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pokeTypes: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
  });
};
