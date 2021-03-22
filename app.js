const express = require("express");
const app = express();
const path = require("path");
const pool = require("./db");
const router = express.Router();
const pg=require("./db")


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'))

var ddb=pool; 
ddb.query('Select * from users', (error, results) => {
  if (error) {
    throw error
  }
  console.log(results.rows)
})


router.get("/", (req, res) => {
  res.render("index");
});

router.get("/admin", (req, res) => {
  res.render("admin_start");
});

router.get("/user", (req, res) => {
  res.render("user_start");
});


router.get("/product", (req, res) => {
  res.render("product");
});


router.get("/order", (req, res) => {
  res.render("order");
});

router.get("/customers", (req, res) => {
  res.render("customers");
});
router.get("/ready_products", (req, res) => {
  res.render("ready_products");
});
router.get("/archives", (req, res) => {
  res.render("archives");
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






app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");