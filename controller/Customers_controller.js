const Customers=require('../model/Customers')
const bodyParser = require('body-parser');
const Order = require('../model/Order');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.findAll= (req, res) => {
  Customers.findAll().then(data=>{
    var id_customers=[]
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
      id_customers.push(data[i].dataValues)
    }
    
    console.log(id_customers);
    res.render('customers',{title:"tmp",cust:id_customers})
  })

};






exports.AddCustomers= async (req, res) => {
  const { name_company, nip, adress_company,nr } = req.body
  
  
  const cut= await Customers.create({name_company:name_company,nip:nip,adres:adress_company,phone_number:nr}).then(gig => res.redirect('customers'))
  
};