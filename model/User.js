const Sequelize=require('sequelize');
const DataTypes =require ('sequelize');
const db =require('../db.js') ;



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
      
    }
    
  }, {
   
  });

  
 module.exports= User;
  /*
  var printerhash;
  bcrypt.hash("print123", 10, (err, hash) => {
    printerhash=hash;
  });

  var carphash;
  bcrypt.hash("Carp123", 10, (err, hash) => {
    carphash=hash;
  });

  const addFun=async function(){
  await db.sync({ force: true });
  const printer=await User.create({ name: "Printer", password:printerhash });
  const carpenter=await User.create({ name: "Carpenter ", password:carphash });
  
  const users=await User.findAll();
  console.log("All users:", JSON.stringify(users, null, 2));
}

  addFun();
*/