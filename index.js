const express =require('express')
require('./config')
const products=require('./product')
const app=express()
app.use(express.json())// to get req.body data

app.post("/create",async(req,res)=>{
    let data= new products(req.body);
    let result= await data.save()
    console.log(result)
res.send(result)
})
app.listen(5000)