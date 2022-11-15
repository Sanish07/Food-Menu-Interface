const fData = require("../data/FoodData.json");

const homeRoute = (req,res)=>{
    let title = "Homepage";
    res.render("../views/home.ejs", {
        pageTitle : title,
        headTitle : "Welcome to Food Menu Interface!",
        foodData : fData.foodData
    });
}

module.exports = homeRoute;