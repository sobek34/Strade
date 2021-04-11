const Customers=require('../model/Customers')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.findAll= (req, res) => {
  Customers.findAll().then(data=>{
    var id_customers=[]
    for(var i=0;i<=1;i++){
      id_customers.push(data[i].dataValues)
    }
    
    console.log(id_customers);
    res.render('customers',{title:"tmp",cust:id_customers})
  })

};

exports.AddCustomers= async (req, res) => {
  const { name_company, nip, adress_company,nr } = req.body
  
  console.log("name"+name_company+"  nip_nr"+nip+" adress"+adress_company+" ph"+nr )
  const cut= await Customers.create({name_company:name_company,nip:nip,adres:adress_company,phone_number:nr}).then(gig => res.render('/customers'))
  
};