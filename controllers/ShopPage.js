const ShopData = require("../models/ShopData");

const ShopPage = async (req,res)=>{
    let allData = await ShopData.find({});
    let shopObj = allData.find((shop)=>{
        return shop.shopDetails.shopId == req.params.shopId;
    });

    res.render("../views/shoppage.ejs", {
        shopInfo : shopObj,
        pageTitle : "Shop Page",
        headTitle : "Shop Info"
    });
}

module.exports = ShopPage;