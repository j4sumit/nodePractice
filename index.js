const {MongoClient}=require("mongodb")
// const MongoClient=require("mondodb").MongoClient// both are same

const url = "mongodb://127.0.0.1:27017"
const database="SumitDatabase"
const client =new MongoClient(url);

async function getData(){
    let result =await client.connect();
    console.log('Connected successfully to server')
    let db= result.db(database);
    let collection= db.collection('mongodbpractice');
    let response=await collection.find({}).toArray();
    console.log("response",response)
}

getData();