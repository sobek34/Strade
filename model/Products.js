const { Sequelize, DataTypes  } = require('sequelize');
const db=require('../db.js');
const { model } = require('../db.js');

const Product = db.define('product', {
    
    id_product:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      get(){
        const rawValue = this.getDataValue(id_order);
        return rawValue ? rawValue.toUpperCase() : null;
      }
    },
    id_order:{
        type: Sequelize.INTEGER,
        
      },
  

    model: {
      type: DataTypes.STRING,
      allowNull: false
    },

    comments: {
        type: DataTypes.STRING,
        
      },

    data_start:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    },
    data_finish:{
        type:Sequelize.DATEONLY,

    },  
    ready:{
        type: DataTypes.BOOLEAN   
    },
    archives:{
        type: DataTypes.BOOLEAN   
    }
   
   
  }, {
   
  });
  Product.sync().then(()=>
  console.log("create table"))

 module.exports= Product;