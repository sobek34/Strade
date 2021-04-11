const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');

const Order = db.define('order', {
    
    id_order:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_customers:{
        type: Sequelize.INTEGER,
        
      },
    status:{
        type: DataTypes.STRING,
        
      },

    name_company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_start:{
        type:DataTypes.DATE,

    },
    data_finish:{
        type:DataTypes.DATE,

    },
  }, {
   
  });
  module.exports=Customers;