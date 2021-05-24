const Sequelize=require('sequelize');
const DataTypes =require ('sequelize');
const db =require('../db.js') ;



const User_Role = db.define('user_role', {

    id_role:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

    id_user: {
        type: DataTypes.STRING,
        allowNull: false
      },

    })
    module.exports=User_Role ;