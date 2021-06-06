const Order=require('../model/Order')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Customers=require('../model/Customers');
const Product = require('../model/Products');
var randomstring = require("randomstring");



exports.findAll= (req, res) => {
  
  var sess 
      sess=req.session;
      if(sess.role!=1){
        
        res.render("error",{err:"error"})
        return -1;
      }
    Order.findAll({include: Customers}).then(data=>{
      var id_order=[]
      var len=0;
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
        id_order.push(data[i].dataValues)
        
      }
      
      console.log(id_order);

      Customers.findAll({attributes: ['name_company']}).then(data=>{
        var name_company=[]
        var len=0;
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
          name_company.push(data[i].dataValues)
        }
        
        console.log(name_company);
        res.render('order',{title:"order",cust:id_order,title:"name_company",company:name_company})
        
      })

      
      
    })
  
  };


  exports.AddOrder= async (req, res) => {
    var sess 
    sess=req.session;
    if(sess.role!=1){
      
      res.redirect("error")
      return -1;
    }  
   
    const { customer_order, data_start } = req.body

    Customers.findAll({attributes: ['id_customers'], where:{name_company:customer_order}}).then(data=>{
      var id_company=[]
      var len=0;
      while(true){
        if (data[len]==undefined){
          break;
        }
        else{
          len++;
        }
      }
  
      for(var i=0;i<len;i++){
        console.log("sdad"+data[i].dataValues.id_customers)
        id_company.push(data[i].dataValues.id_customers)
      }
      var key_order=randomstring.generate(7);
      
      const save_order=  Order.create({id_customers:id_company,name_company:customer_order,data_start:data_start,status:"Start",key:key_order}).then(gig => res.redirect('order'))
    
  });
}
  
exports.AddFinishDate= async (req, res) => {
  
  var sess 
    sess=req.session;
    if(sess.role!=1){
      
      res.redirect("error")
      return -1;
    }  

  
  const { id_order, date_finish } = req.body

  console.log(id_order)
  console.log(date_finish)
  await Order.update({ data_finish:date_finish,status:"Finish" }, {
    where: {
      id_order: id_order
    }
  }).then(data=> {res.redirect('order')}).catch(err=>{console.log("error")});

}

exports.PrintProductOrder= async (req,res) =>{
  
  var sess 
    sess=req.session;
    if(sess.role!=1){
      
      res.redirect("error")
      return -1;
    }  
  const{ id_Order }=req.body
  Order.findAll({include: Product,where:{id_order:id_Order}}).then(data=>{
    prod=data[0].dataValues.products
    id_ord=data[0].dataValues.id_order
    key_order=data[0].dataValues.key
    date_start=data[0].data_start
    var len=0
    while(true){
      if (prod[len]==undefined){
        break
      }
      len++;
    }
    var product=[]
    
    for(var i=0;i<len;i++){
    product.push(prod[i].dataValues)
    }
    console.log("#",product[0])
  res.render("order_product",{id_order:id_ord,key:key_order,product_model:product,date_start:date_start})
  
  
  })

}

exports.MyOrder= (req,res) =>{

  var sess 
  sess=req.session;
  if(sess.role!=2 ){
    
    res.redirect("error")
    return -1;
  } 
    res.render("my_order")

}

exports.MyOrderKey=async (req,res) =>{
  var sess 
  sess=req.session;
  if(sess.role!=2 ){
    
    res.redirect("error")
    return -1;
  } 
  const {key_order} =req.body


  Order.findOne({where:{key:key_order}}).then((data=>{
    var order_tab=[]
    
    order_tab.push(data.dataValues)
    res.render("my_order",{order:order_tab})


  }))
}

exports.AddComments= async (req, res) => {
  var sess 
  sess=req.session;
  if(sess.role!=2 ){
    
    res.redirect("error")
    return -1;
  } 
  const {id_order,comments} = req.body

  const cut= await Order.update({comments:comments},{where:{id_order:id_order}}).then(gig => res.render('comments',{mess:"Add comments"}))
  
};