const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/SumitDatabase')  //Database name-SumitDatabase
const ProductSchema= new mongoose.Schema({
    name:String,
    age:Number,
    state:String
});

const saveInDB=async()=>{
const ProductsModel = mongoose.model('product',ProductSchema) //Collection name-product
let data = new ProductsModel({
    name:"Amit",
    age:15,state:"Bihar"});
let result =await data.save()
console.log(result)
}
// saveInDB();

const updateInDB=async()=>{
    const productModel=mongoose.model("product",ProductSchema);
    let data = await productModel.updateMany(    //for one record -updateOne || for many -updateMany
        {name:"Radha"},
        {
            $set: {age:25,name:"divya"}
        }
    )
console.log(data);
}
// updateInDB()

const deleteInDB=async()=>{
    const productModel=mongoose.model("product",ProductSchema);
    const data=await productModel.deleteMany({name:"divya"})  // deleteOne and deleteMany
console.log(data);
}
// deleteInDB()

const findInDB= async()=>{
    const productModel=mongoose.model("product",ProductSchema)
    let data=await productModel.find()   //find({name:"Amit"})->give record with name Amit|| find() ->display all record|| if record not found return blank[]
    console.log(data)
}
findInDB()
