const modelUser_Role =require('../model/User_Role.js')

const User_role_check= async function(id_user){

    const User_Role_By_ID= await modelUser_Role.findOne({ where: { id_user: id_user } });
    return User_Role_By_ID.id_role
}

module.exports= User_role_check;