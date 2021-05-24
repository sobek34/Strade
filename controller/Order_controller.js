const Order=require('../model/Order')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Customers=require('../model/Customers')


exports.findAll= (req, res) => {
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
      
      const save_order=  Order.create({id_customers:id_company,name_company:customer_order,data_start:data_start}).then(gig => res.redirect('order'))
    
  });
}
  


