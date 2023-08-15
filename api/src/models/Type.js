const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true  // tipo numerico, primarykey y de autoincremento
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,  // tipo string, notNull
          }
    },
    {
      timestamps: false,
      createdAt: false,
    })
}