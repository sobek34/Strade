const  Router= require('express');

const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const login =require('../controller/User_controller.js')
const customer =require('../controller/Customers_controller.js')
const product= require('../controller/Product_controller.js')
const order= require('../controller/Order_controller.js')
const ready_product= require('../controller/ReadyProduct_controller.js')
const archives= require('../controller/Archives_controller.js')
const user_role=require('../controller/User_Role_controller.js');






    const app = Router();
   

    
    app.use(Router.json())
    

    app.get("/", (req, res) => {
        res.render("index");
      });
      
    app.post("/",urlencodedParser, async (req, res) => {
        console.log(req.body)
        var chechlog=login(req.body.user_nick,req.body.user_pass)
        console.log(chechlog)
        chechlog.then((value) =>{
          var id_roles
          console.log("@@@@"+value)
          var user_roles=user_role(value)
          user_roles.then((id_role)=>{
          id_roles=id_role
          if(value){
            if(id_roles==1){
            res.render('admin_start')
            }
            if(id_roles==2){
              res.render('product')
            }
          }
        
        
        }) 
          });
       });

      app.get("/product", product.findAll)
      app.post("/search_product",urlencodedParser, product.serach_product)
      app.post("/add_product",urlencodedParser, product.AddProduct)
      app.delete("/del", urlencodedParser, product.DeleteProduct)

      
     

    

        
        
      app.get("/customers", customer.findAll)
      app.post("/customers",urlencodedParser,customer.AddCustomers)
      app.get("/addCustomer",urlencodedParser, async (req,res)=>{

        console.log("@@@@@@@@"+req.body.id_customer)
      } )
      app.get("/order",order.findAll)
      
      app.post("/order",urlencodedParser,order.AddOrder)


      app.get("/ready_products",ready_product.findAll)
      app.put("/update_arch",urlencodedParser, ready_product.UpdateArch)
      app.get("/archives",archives.findAll)




   module.exports=app;