
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { Op } = require("sequelize");
const Order = require('../model/Order.js');
const Comments = require('../model/Comments.js');
const OrderComments=require('../model/OrderComments');
const Commenst = require('../model/Comments.js');



exports.CommentsOrderPrint= async(req, res) => {
    var sess 
    sess=req.session;
    if(sess.role!=1 ){
      
      res.redirect("error")
      return -1;
    }  

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
    var sess 
    sess=req.session;
    if(sess.role!=2 ){
      
      res.redirect("error")
      return -1;
    }  
    const {id_order,comments} = req.body
    var id_comment=[]
    const id_comments= await Commenst.create({data_comment:comments}).then(data=>{
        return data.dataValues.id_comment

       
    })
    
    OrderComments.create({id_comment:id_comments,id_order:id_order})

    res.render("comments",{message:"add comment"})
    
    
}