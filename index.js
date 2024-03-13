const express = require('express');
const app =express()
app.get("",(req,res)=>{  
res.send(`<h1>Welcome to Home page</h1>
<a href="/about">Go to about Page</a>
`)
})

app.get("/about",(req,res)=>{
res.send(`
<input type="text" placeholder="Enter some data here" value='${req.query.name}'/><br />
<button>Submit</button>
<a href="/">Go to Home Page</a>
`)
})

app.get("/contact",(req,res)=>{
    res.send([{
        name:"Sumit",
        email:"Sumit@gmail.com"
    },
    {
        name:"Amit",
        email:"Amit@gmail.com"
    }
])
    })

app.listen(4000)