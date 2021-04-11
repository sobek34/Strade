const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');


const Group = db.define('group', {
    
    id_group:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    type_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    
  }, {
   
  });
  module.exports=Group ;