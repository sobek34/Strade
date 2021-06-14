const login =require('../controller/User_controller.js')
const user_role= require("../controller/User_Role_controller.js")

exports.MainPage=(req, res) => {
    res.render("index");
    
    
  };


exports.Login=async (req, res) => {
    var sess 
    sess=req.session;
    console.log(req.body)
    var chechlog=login(req.body.user_nick,req.body.user_pass)
    console.log(chechlog)
    var value1
    chechlog.then((value) =>{
      
      console.log("@@@@"+value)

      if(value==0){
        res.render("index",{message:"wrong login or password"})
      }
      const data= user_role.User_role_check(value).then((data1)=>{
      console.log('EEE',data1)
        sess.role=data1[0]
        sess.type_user=data1[1]
     
        if(data1[0]==1){
        res.render("admin_start",{type:sess.type_user})
      }
      else{
        res.render("user_start",{type:sess.type_user})
      }

      }
      )  
    })}; 