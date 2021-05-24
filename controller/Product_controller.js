const modelProduct =require('../model/Products.js');
const bodyParser = require('body-parser');
const Product = require('../model/Products.js');


exports.findAll= (req, res) => {
    modelProduct.findAll().then(data=>{
      var id_product=[]
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
        
        id_product.push(data[i].dataValues)
      }
      
      
      res.render('product',{title:"tmp",product:id_product})
    })
  
  };

  exports.serach_product= async (req, res) => {
      const {str_search,type_search_item}=req.body
      if(type_search_item=='id_product')
      modelProduct.findAll( {
        where: {
          id_product: str_search
        }
      }).then(data=>{
        var prod=[]
        prod.push(data[0].dataValues)
        console.log(prod)
        res.render('product',{title:"tmp",product:prod})
      } 
      )


      if(type_search_item=='model')
      modelProduct.findAll( {
        where: {
          model: str_search
        }
      }).then(data=>{
        var prod=[]
        prod.push(data[0].dataValues)
        console.log(prod)
        res.render('product',{title:"tmp",product:prod})
      } 
      )

      if(type_search_item=='customer')
      modelProduct.findAll( {
        where: {
          name_company: str_search
        }
      }).then(data=>{
        var prod=[]
        prod.push(data[0].dataValues)
        console.log(prod)
        res.render('product',{title:"tmp",product:prod})
      } 
      )


      
    }


    exports.AddProduct= async (req, res) => {
      const { model, id_order, data_start} = req.body
      console.log("model"+model+ " custom"+id_order+" data"+ data_start)
      
      const cut= await Product.create({model:model,id_order:id_order,data_start:data_start}).then(gig => res.redirect('product'))
      
    };

    
    exports.DeleteProduct= async (req, res) => {
      var id_delUser=JSON.stringify(req.body.id);
      var id_del=id_delUser.slice(1,(id_delUser.length-1))
      console.log('body: ' + id_del);
      const delUser= await Product.destroy({
        where: {
          id_product: id_del
        }
      }).then(gig => res.render('product')).catch(gig => console.log("error"));
      
      
      
      
  };


 