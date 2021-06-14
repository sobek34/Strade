import { Router } from 'express';
import bodyParser from 'body-parser'
var urlencodedParser = bodyParser.urlencoded({ extended: false })
import product_cont from '../controller/Product_controller.js'

export default () => {
    const app = Router();

    
    app.get("/product", (req, res) => {
        
        res.render("product");
      });

    }

