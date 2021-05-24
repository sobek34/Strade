var hbs = require('express-handlebars');

const index= require('./routes/index_routes.js')

const express= require("express");
const app = express();
const path =require("path");

const router = express.Router();
const bodyParser=require('body-parser')

var Sequelize =require('sequelize');
app.use(bodyParser.urlencoded({ extended: true }));






app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'))





app.use('/',index);
//app.use('/product',product());


router.get("/admin", (req, res) => {
  res.render("admin_start");
});

router.get("/user", (req, res) => {
  res.render("user_start") ;
});









router.get("/job_description", (req, res) => {
  res.render("job_description");
});

router.get("/comments", (req, res) => {
  res.render("comments");
});

router.get("/order_user", (req, res) => {
  res.render("order_user");
});
router.get("/archives", (req, res) => {
  res.render("archives");
});
router.delete('/del',(req, res)=>{
  res.send("jessss")
})



app.use("/", router);
app.listen(process.env.port || 3000);


console.log("Running at Port 3000");