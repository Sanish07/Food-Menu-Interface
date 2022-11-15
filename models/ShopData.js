const mongoose = require('mongoose');

const shopData = new mongoose.Schema({
    shopDetails : {
        shopId : {type : Number, min : 100},
        shopName : {type : String},
        contactDetails : {
            contactNum : {type : String},
            shopLocation : {type : String},
            shopProfile : {type : String}
        },
    },
    reviews : {type : Number},
    timings : {type : Array},
    attributes : {type : Array},
    foodAvailable : [{
        foodId : {type : Number, min : 1000},
        foodName : {type : String},
        foodPrice : {type : Number}
    }],
    imageURL : {type : String}
});

module.exports = mongoose.model("ShopData", shopData);