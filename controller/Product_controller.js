const Project=require('../model/Products')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.findAll= (req, res) => {
    Project.findAll().then(data=>{
    var id_projekt=[]
    for(var i=0;i<=1;i++){
        id_projekt.push(data[i].dataValues)
    }
    
    console.log(id_projekt);
    res.render('product',{title:"tmp",cust:id_projekt})
  })
}