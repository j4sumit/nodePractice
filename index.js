const express = require("express");
const EventEmitter = require("events"); // EventEmitter is a class
const app =express();
const event = new EventEmitter();
let count =0;

event.on("countAPI",()=>{
    count++;
    console.log("Event Called",count);
})

app.get("/",(req,res)=>{
    res.send("api called");
    event.emit("countAPI")
})

app.get("/search",(req,res)=>{
    res.send("Search api called");
    event.emit("countAPI")
})

app.get("/update",(req,res)=>{
    res.send("update api called");
    event.emit("countAPI")
})

app.listen(5000);