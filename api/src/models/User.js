const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: {
                msg: 'Debe ser un correo electrónico válido',
              },
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          },
          nombre: {
            type: DataTypes.STRING,
            allowNull: false
          },
          apellido: {
            type: DataTypes.STRING,
            allowNull: false
          },
          pais: {
            type: DataTypes.STRING,
            allowNull: false
          }
    })
}