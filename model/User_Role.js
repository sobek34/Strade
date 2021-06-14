const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../db');


const User_Role = db.define('user_role', {
    
  id_role:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
 
  
})

module.exports =User_Role;