const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    id: {
      type: DataTypes.UUID, // UUID --> standard is 32 digits (8-4-4-4-12), 
      primaryKey : true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4 // UUIDV4 autogenerates the id 
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    image:{
      type: DataTypes.STRING,
      validate: { isUrl: true},
    },

    life:{
      type: DataTypes.INTEGER,
    },
    
    attack:{
      type: DataTypes.INTEGER,
    },
    
    defense:{
      type: DataTypes.INTEGER,
    },

    speed:{
      type: DataTypes.INTEGER,
    },

    height: {
      type:DataTypes.INTEGER,
    },

    weight: {
      type: DataTypes.INTEGER,
    },


  }, {
    timestamps: false,
  });
};
