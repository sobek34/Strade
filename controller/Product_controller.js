const modelProduct =require('../model/Products.js');



const FindAll= function(req,res) {
        const product =modelProduct.findAll();
        console.log("pro"+product)
        if(!product) return console.log("Products not find")
        
        return product
    }

    

export default FindAll