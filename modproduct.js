const mongoose=require('mongoose');
const modelProduct=mongoose.Schema({
title:String,
desc:String,
image:String,
age:String,
number:String,
});
module.exports=mongoose.model('products',modelProduct);