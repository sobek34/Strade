const  Router= require('express');
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const login =require('../controller/User_controller.js')
const customer =require('../controller/Customers_controller.js')





    const app = Router();


    app.get("/", (req, res) => {
        res.render("index");
      });
      
    app.post("/",urlencodedParser, async (req, res) => {
        console.log(req.body)
        var chechlog=login(req.body.user_nick,req.body.user_pass)
        console.log(chechlog)
        chechlog.then((value) =>{
          console.log(value)
          if(value){
            res.render("admin_start")
          }
          else{
            res.render("index",{err:'err name or password'});
          }
          });
       });

      app.get("/product", (req, res) => {
        console.log(product.id_product)
        res.render("product");
      });

      app.get("/customers", customer.findAll)
      app.post("/customers",urlencodedParser,customer.AddCustomers)

   module.exports=app;