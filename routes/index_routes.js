const  Router= require('express');
const session = require('express-session');



const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const customer =require('../controller/Customers_controller.js')
const product= require('../controller/Product_controller.js')
const order= require('../controller/Order_controller.js')
const ready_product= require('../controller/ReadyProduct_controller.js')
const archives= require('../controller/Archives_controller.js')
const product_worker=require('../controller/Product_worker_controller.js');
const reg_user  = require('../controller/registration_controller.js');
const error= require("../controller/Error_controller.js")
const comment=require("../controller/Comments_controller")
const sing_out=require('../controller/Sing_out_controller.js')
const main= require('../controller/Main_controller.js')




    const app = Router();
    
    app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
    
    app.use(Router.json())
    
    var sess

        app.get("/",main.MainPage)
        app.post("/",urlencodedParser,main.Login)

       app.get("/reg_user",reg_user.reg_user)
       app.post("/reg_new",urlencodedParser,reg_user.reg_new)

      app.get("/product", product.findAll)
      app.post("/product", product.findAll)
      app.post("/search_product",urlencodedParser, product.serach_product)
      app.post("/add_product",urlencodedParser, product.AddProduct)
      app.delete("/del", urlencodedParser, product.DeleteProduct)
      app.put("/put_product",urlencodedParser,product.PutProduct)
      
      

      app.get("/product_worker",product_worker.print)
      app.post("/load_product",urlencodedParser,product_worker.load_product)

      app.get("/error",error.Geterror)
    
     

    
      
        
        
      app.get("/customers", customer.findAll)
      app.post("/customers",urlencodedParser,customer.AddCustomers)
    
      app.get("/order",order.findAll)
      app.post("/data_finish",urlencodedParser,order.AddFinishDate)
      app.post("/order",urlencodedParser,order.AddOrder)
      app.post("/order_product",urlencodedParser,order.PrintProductOrder)
      
      
      app.get("/my_order",order.MyOrder)
      app.post("/my_order",order.MyOrderKey)
      app.post("/comments",urlencodedParser,comment.AddComment)


      app.get("/ready_products",ready_product.findAll)
      app.put("/update_arch",urlencodedParser, ready_product.UpdateArch)
      app.get("/archives",archives.findAll)

      app.post("/print_comment",urlencodedParser,comment.CommentsOrderPrint)
      app.get("/sing_out",sing_out.Sing_out)

    

   module.exports=app;