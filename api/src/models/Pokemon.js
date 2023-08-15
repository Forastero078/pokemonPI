const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true     //tipo numerico, primary key y de incremento automatico
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,   // tipo string, notNull
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false   // tipo string, notNull
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    defend: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false // tipo numerico, notNull
    },
    pokeTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false // tipo arreglo de string's
      
      
    }
  });
};
