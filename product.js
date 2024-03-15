const mongoose =require('mongoose');
//Schema
const productSchema= new mongoose.Schema({
    name:String,
    age:Number,
    state:String
})
//Module
module.exports = mongoose.model('products',productSchema)  