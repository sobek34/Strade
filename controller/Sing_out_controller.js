
exports.Sing_out = (req,res) => {

    req.session.destroy();

    
    res.render("index")
    return 1;  
}