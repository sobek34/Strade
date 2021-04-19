const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');

const Order = db.define('order', {
    
    id_order:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      get(){
        const rawValue = this.getDataValue(id_order);
        return rawValue ? rawValue.toUpperCase() : null;
      }
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
        type:DataTypes.DATEONLY ,

    },
    data_finish:{
        type:DataTypes.DATEONLY ,

    },
    
  
  }, {
   
    
  
  });
  Order.sync().then(()=>
  console.log("create table"))
  
  module.exports=Order;