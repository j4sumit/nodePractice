const express = require('express');
const path= require('path'); //to access foloder location
console.log("dirname",__dirname); //C:\Users\j4sum\OneDrive\Desktop\nodePractice

const app =express()
const publicPath=path.join(__dirname,"public")
console.log("publicPath",publicPath); //C:\Users\j4sum\OneDrive\Desktop\nodePractice\public
app.use(express.static(publicPath)) //Static method load static page

app.listen(4000)