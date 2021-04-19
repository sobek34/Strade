const Order=require('../model/Order')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.findAll= (req, res) => {
    Order.findAll().then(data=>{
    var id_orders=[]
    for(var i=0;i<=1;i++){
      id_orders.push(data[i].dataValues)
    }
    
    console.log(id_orders);
    res.render('order',{title:"tmp",cust:id_orders})
  })
}