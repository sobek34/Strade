const User =require('../model/User.js')
const Group = require('../model/Group.js');


exports.User_role_check= async function(id_user){
    
  
    console.log("id u"+id_user)
    var id_r=[]
    const User_Role_By_ID= await User.findAll({include: Group, where: { id_user: id_user } }).then(id_roles=>{
       console.log("!@!@!",id_roles[0].dataValues.name)
       console.log("!@!@!",id_roles[0].id_group)
        
        id_r.push(id_roles[0].dataValues.id_group)
        id_r.push(id_roles[0].dataValues.name)
        
        
        
    });
    
    return id_r

}
