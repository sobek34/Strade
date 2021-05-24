const order=require('../model/Order')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { Op } = require("sequelize");






exports.findAll= (req, res) => {
    var k18=[]
    var k19=[]
    var k20=[]
    var k21=[]
          

    
    order.findAll( {
      
      where: {
        archives: true,
        
        data_finish:{
          [Op.between]: ["2018-01-01","2018-12-31"]
        }
      }
    }).then(data=>{
      var len=0
      while(true){
        if (data[len]==undefined){
          break;
        }
        else{
          len++;
        }
      } 
      var i=0
    for(i=0;i<len;i++){
    k18.push(data[i].dataValues)
    
    }
    

  })

  order.findAll( {
      
    where: {
      archives: true,
      
      data_finish:{
        [Op.between]: ["2019-01-01","2019-12-31"]
      }
    }
  }).then(data=>{
    var len=0
    while(true){
      if (data[len]==undefined){
        break;
      }
      else{
        len++;
      }
    } 
    var i=0
    for(i=0;i<len;i++){
    k19.push(data[i].dataValues)
    
    }
    console.log(k19)
  })


  order.findAll( {
      
    where: {
      archives: true,
      
      data_finish:{
        [Op.between]: ["2020-01-01","2020-12-31"]
      }
    }
  }).then(data=>{
    var len=0
    while(true){
      if (data[len]==undefined){
        break;
      }
      else{
        len++;
      }
    } 
    var i=0
    for(i=0;i<len;i++){
    k20.push(data[i].dataValues)
    
    }
    
    
  })


  order.findAll( {
      
    where: {
      archives: true,
      
      data_finish:{
        [Op.between]: ["2021-01-01","2021-12-31"]
      }
    }
  }).then(data=>{
    var len=0
    while(true){
      if (data[len]==undefined){
        break;
      }
      else{
        len++;
      }
    } 
    var i=0
    for(i=0;i<len;i++){
    k21.push(data[i].dataValues)
    
    }
    
    
    res.render('archives',{y18:k18,y19:k19,y20:k20,y21:k21})
    
  })




}