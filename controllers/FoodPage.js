const ShopData = require("../models/ShopData");

const FoodPage = async (req, res)=>{
    let foodId = req.params.foodId;
    let allData = await ShopData.find({}).sort({reviews : -1});
    let displayArray = [];
    let pricesArray = [];
    allData.forEach((shop)=>{
        shop.foodAvailable.forEach((food)=>{
            if(food.foodId == foodId){
                displayArray.push(shop);
                pricesArray.push(food.foodPrice);
            }
        }) 
    });
    // console.log(allData);
    res.render("../views/foodpage.ejs", {
        shopData : displayArray,
        pageTitle : "Food Page",
        prices : pricesArray,
        headTitle : "Matched Shops"
    });
} 

module.exports = FoodPage;