const order=require('../model/Order.js')
const comments=require('../model/Comments.js')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { Op } = require("sequelize");
const Order = require('../model/Order.js');
const Comments = require('../model/Comments.js');
const Commenst = require('../model/Comments.js');



exports.CommentsOrderPrint= async(req, res) => {

    const {id_order_com}=req.body

    Order.findAll({include:Comments,where:{id_order:id_order_com}}).then(data=>{

    
        id_order=data[0].dataValues.id_order

        
        var count_comment=0
        while(data[0].dataValues.comments[count_comment]!=undefined){
            count_comment++;
        }
        var comments_tab=[]
        for(var i=0;i<count_comment;i++){
            comments_tab.push(data[0].dataValues.comments[i].dataValues)
        }
        
        
        res.render("print_comment",{id_orders:id_order,comments_tab:comments_tab})
    })

}

exports.AddComment = async (req,res) =>{

    const {id_order,comments} = req.body

    Commenst.create({data_comment:comments,Order:[{id_order:id_order,OrderComments: {
        selfGranted: true
      }}]
    
    },{
        include: Order})
}