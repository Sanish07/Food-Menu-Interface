const ShopData = require("../models/ShopData");

const homeRoute = async (req,res)=>{
    let title = "Homepage";
    let allData = await ShopData.find({}).sort({reviews : -1});
    res.render("../views/home.ejs", {
        pageTitle : title,
        shopData : allData
    });
}

module.exports = homeRoute;