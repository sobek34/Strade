const order=require('../model/Order')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.findAll= (req, res) => {
  var sess 
      sess=req.session;
      if(sess.role!=1){
  
        res.render("error")
      }
    
    order.findAll( {
      where: {
        status: "Finish",
        archives: false

      }
    }).then(data=>{
      var len=0;
      var prod=[]
    while(true){
      if (data[len]==undefined){
        break;
      }
      else{
        len++;
      }
    }
    for(var i=0;i<len;i++){
      console.log("sdad"+data[i].dataValues)
      prod.push(data[i].dataValues)
    }
      console.log(prod)
      res.render('ready_products',{title:"tmp",order:prod})
    } 
    )

}

exports.UpdateArch= async (req, res) => {
  var sess 
      sess=req.session;
      if(sess.role!=1){
  
        res.render("error")
      }

  var id_arch=JSON.stringify(req.body.id);
  await order.update({ archives: true }, {
    where: {
      id_order: id_arch
    }
  }).then(data=> {res.render('ready_products')}).catch(err=>{console.log("error")});


}
