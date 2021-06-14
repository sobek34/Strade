const bodyParser = require('body-parser');
const session = require('express-session');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const modelUser =require('../model/User.js');
const crypto =require('crypto');

let hash = (password, salt) => {
    if (password == null || salt == null) {
        throw new Error('Must Provide Password and salt values');
    }
    if (typeof password !== 'string' || typeof salt !== 'string') {
        throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
    }
    return hasher(password, salt);
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

exports.reg_user= (req, res) => {
    
    res.render("reg_user")

}

exports.reg_new= async(req, res) => {
    
    const {user_name,pass,pass1,id_role}=req.body
    if(pass!=pass1){
        res.render("reg_user",{message:"password doesn't match"})
        return 0;
    }
    var password=hash(pass,'10').hashedpassword
    const user= await modelUser.create({name:user_name,password:password})

    res.render("index")

}
