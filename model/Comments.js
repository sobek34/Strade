const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../db');
const Order=require('../model/Order.js')



const Commenst = db.define('comment', {
    
    id_comment:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  
    data_comment: {
      type: Sequelize.STRING,
      allowNull: false
    },
   
    
  })


  
Commenst.belongsToMany(Order, {foreignKey: 'id_comment', through: 'OrderCommenst' });
Order.belongsToMany(Commenst, { foreignKey: 'id_order',through: 'OrderCommenst' });
  module.exports =Commenst;