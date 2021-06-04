const modelUser =require('../model/User.js');


const crypto =require('crypto');
const Group = require('../model/Group.js');

let logger = func => {
  console.log(func);
};

let hasher = (password, salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  let value = hash.digest('hex');
  return {
      salt: salt,
      hashedpassword: value
  };
};

let hash = (password, salt) => {
  if (password == null || salt == null) {
      throw new Error('Must Provide Password and salt values');
  }
  if (typeof password !== 'string' || typeof salt !== 'string') {
      throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
  }
  return hasher(password, salt);
};

logger("new "+hash('cadmin','10').hashedpassword)

const Login= async function(username,passw){
  var hassword=hash(passw,'10').hashedpassword
  console.log("pass"+hassword)

  const UserProfile= await modelUser.findOne({include: Group, where: { name: username } });
  var array_user=[]
  console.log("type",UserProfile.dataValues.group.dataValues.type_user)
  array_user.push(UserProfile.dataValues.id_user)
  console.log(array_user)
  if (array_user==[]){
    console.log("not find")
    return 0
  }
  else{
  if (UserProfile.password==hassword){
      console.log("pass good")
        return array_user
    }
    else{
        console.log('nennnn')
        return 0
        }
        
      }
}


module.exports= Login;
