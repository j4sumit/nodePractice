const express = require('express');
const app =express()
app.get("",(req,res)=>{
res.send("hello, this is home page")
})

app.get("/about",(req,res)=>{
res.send("This is about page")
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page")
    })

app.listen(4000)