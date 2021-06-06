const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');
const  OrderCommenst =db.define('OrderCommenst',{
    id_comment:{
        type: Sequelize.INTEGER,
     
      },
      id_order:{
        type: Sequelize.INTEGER,
     
      },
},{
    tableName: 'OrderCommenst'
    })
    module.exports=OrderCommenst;