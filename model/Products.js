const  Sequelize=require('sequelize');
const DataTypes=require('sequelize');
const db=require('../db.js');

const Product = db.define('product', {
    
    id_product:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
      type: Sequelize.DATEONLY,

    },  
    ready:{
        type: DataTypes.BOOLEAN,  
        defaultValue: false, 
    },
    archives:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,    
    }
   
   
  }, {
   
  });
  const Fixture = async () => {
    try {
      await sequelize.sync({ force: true });
      await Participants.create(existingUserCredentials);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  };
  Fixture()
  
  module.exports=Product;