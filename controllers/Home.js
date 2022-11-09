const homeRoute = (req,res)=>{
    let title = "Homepage";
    res.render("../views/home.ejs", {
        pageTitle : title
    });
}

module.exports = homeRoute;