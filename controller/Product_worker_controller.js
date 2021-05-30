
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Product = require('../model/Products.js');
const Task=require("../model/Task.js");
const User = require('../model/User.js');
const Role = require('../model/User_Role');




exports.print= (req, res) => {

    res.render('order_worker')

}    


exports.load_product=async (req, res) => {
    const { id_product } = req.body
    console.log("@@@@@@@@^"+id_product)
    
    //const user_role1= await User_Role.create({id_role:1,id_user:2})
    //user_role1.addTask(task1, { through: { selfGranted: false } });

    
    const role1=await Role.create({id_role:2,id_user:2})
    //const role2=await Role.create({id_role:1,id_user:1})
    const task1= await Task.create({id_product:1,name:"Clear window",finish:true})
    const task2= await Task.create({id_product:1,name:"paint with a primer",finish:false})


    await role1.addTask(task1);
    await role1.addTask(task2);
    Role.findAll({where:{id_role:2}, include: Task}).then(data=>{
        console.log("3333"+JSON.stringify(data))
    })
   Product.findOne({ where: { id_product: id_product }}).then(data=>{
    

    res.render('order_worker',{title:"product",id_product:data.id_product,model:data.model,id_order:data.id_order})

   })
}
