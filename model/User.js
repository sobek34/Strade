const Sequelize=require('sequelize');
const DataTypes =require ('sequelize');
const db =require('../db.js') ;
const Group=require('../model/Group.js')



const User = db.define('User', {
    
    id_user:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
      
    },
    id_group:{
      type: Sequelize.INTEGER,
      
    },
    
  }, {
   
  });

  User.hasOne(Group, {
    foreignKey: 'id_group'
  });
  Group.belongsTo(User,{
    foreignKey: 'id_group'
  });

 module.exports= User;
