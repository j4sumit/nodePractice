const express =require('express')
require('./config')
const product=require('./product')
const app=express()
app.use(express.json())// to get req.body data

app.get("/search/:key",async (req,res)=>{
     let key = req.params.key;
    let ageQuery = {};

    if (!isNaN(key)) {
        ageQuery = { "age": parseInt(key) };// here we are checking if input is number then check in age column
    }
    console.log("key",key)
    console.log("ageQuery",ageQuery)

    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key,$options: 'i'}},
                {"state":{$regex:req.params.key, $options: 'i'}},
                ageQuery
            ]
        }
    )
res.send(data);
})

app.listen(5000)
