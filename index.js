const express = require('express');
const path= require('path'); //to access foloder location

const app =express()
const publicPath=path.join(__dirname,"public")

app.set('view engine', "ejs");   //1
app.get("/profile",(req,res)=>{  //2
    const user={
        name:"Sumit",
        email:"sumit@gmail.com",
        city:"Mumbai",
        skills:["React", "JS", "Node","Angular","Bootstap"]
    }
    res.render('profile', {user})
})

app.get("/login",(req,res)=>{  //2
     res.render('login')
})


app.get("",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get("/aboutme",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get("/help",(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/pageNotfound.html`)
})

app.listen(4000)