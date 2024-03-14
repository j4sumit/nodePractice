const express =require('express');
const dbConnect=require("./mongodb")
const app=express()

app.use(express.json())  //For Post purpose|| for getting data from request body/let result=await data.insertOne(req.body)

app.get("/", async(req,res)=>{
    let data = await dbConnect()
    data= await data.find().toArray();
    res.send(data)
});

app.post("/",async(req,res)=>{
    let data=await dbConnect()
    let result=await data.insertOne(req.body)
    res.send(result)
})

// app.put("/",async(req,res)=>{
// let data=await dbConnect()
// let result=data.updateOne(
//     {name:req.body.name},{$set:req.body} //both linear are smae her using dynamic condition, but it will now work when same field getting updated.
//     // {name:"Amit"},{$set:req.body}
// )   
// res.send({result:"update"})
// })

//Update using Query Param
app.put("/:name",async(req,res)=>{
    console.log("req.params",req.params.name)
    console.log("req.body",req.body)
    let data=await dbConnect()
    let result=data.updateOne(
                // {name:"Amit"},{$set:req.body}
        {name:req.params.name},{$set:req.body} //both linear are smae her using dynamic condition, but it will now work when same field getting updated.
    )   
    res.send({result:"update"})
    })



app.listen(5000);






