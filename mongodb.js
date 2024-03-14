const {MongoClient}=require("mongodb")
// const MongoClient=require("mondodb").MongoClient// both are same

const url = "mongodb://127.0.0.1:27017"
const database="SumitDatabase"
const client =new MongoClient(url);

async function dbConnect(){
    let result =await client.connect();
    db= result.db(database);
    return db.collection('mongodbpractice');
}
module.exports=dbConnect