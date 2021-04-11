import  Sequelize   from 'sequelize';
import DataTypes   from 'sequelize';
import db from '../db.js';


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
        type:DataTypes.DATE,

    },  
    ready:{
        type: DataTypes.BOOLEAN   
    },
    archives:{
        type: DataTypes.BOOLEAN   
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
  
  export default Product;