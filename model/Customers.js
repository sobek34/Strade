const  Sequelize=require('sequelize');
const DataTypes=require('sequelize');
const db=require('../db.js');


const Customers = db.define('customer', {
    
    id_customers:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      get(){
        const rawValue = this.getDataValue(id_customers);
        return rawValue ? rawValue.toUpperCase() : null;
      }
    },

    name_company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nip: {
      type: Sequelize.INTEGER,
      
    },
    adres: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
  }, {
   
  });

  Customers.sync().then(()=>
  console.log("create table"))



module.exports=Customers;