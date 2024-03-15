const mongoose = require('mongoose');

const main=async()=>{
await mongoose.connect('mongodb://127.0.0.1:27017/SumitDatabase')  //Database name-SumitDatabase

const ProductSchema= new mongoose.Schema({
    name:String,
    age:Number
});
const ProductsModel = mongoose.model('product',ProductSchema) //Collection name-product
let data = new ProductsModel({name:"Radha",age:5});
let result =await data.save()
console.log(result)
}

main();