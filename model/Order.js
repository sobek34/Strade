const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');
const Customers=require('../model/Customers')
const Product=require('../model/Products')
const Order = db.define('order', {
    
    id_order:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    archives:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,    
  },
  key:{
    type: DataTypes.STRING
       
}
  
  }, {

   
  });

  Order.hasMany(Product, { 
    foreignKey: 'id_order',})
  Product.belongsTo(Order, { 
    foreignKey: 'id_order',
    foreignKeyConstraint: true
  });
  
  module.exports=Order;