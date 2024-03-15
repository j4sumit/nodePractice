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


app.get("/list",async(req,res)=>{
  let data=await products.find();
  res.send(data);
})

app.delete("/delete/:_id",async(req,res)=>{
console.log(req.params)
 let data = await products.deleteOne(req.params)
res.send(data)
})

app.put("/update/:_id",async(req,res)=>{
     let data = await products.updateOne(
        req.params,
        {$set:req.body}
     )
    res.send(data)
    })
