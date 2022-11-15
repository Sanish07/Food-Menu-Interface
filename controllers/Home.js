const ShopData = require("../models/ShopData");
const fData = require("../data/FoodData.json");

const homeRoute = async (req,res)=>{
    let title = "Homepage";
    let allData = await ShopData.find({}).sort({reviews : -1});
    res.render("../views/home.ejs", {
        pageTitle : title,
        shopData : allData,
        foodData : fData.foodData
    });
}

module.exports = homeRoute;