const modelUser_Role =require('../model/User_Role.js')
const session = require('express-session');

exports.User_role_check= async function(id_user){
    
    var id_r
    const User_Role_By_ID= await modelUser_Role.findAll({ where: { id_user: id_user } }).then(id_roles=>{
        
        
        id_r=id_roles[0].id_role
        
        
    });
    
    return id_r

}
