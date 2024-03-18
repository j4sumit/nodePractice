const express = require('express');
const app = express()
const dotenv =require("dotenv");
dotenv.config()
const PORT =5000;
const dbEmp = require("./employee")

app.use(express.json());
app.post("/add",dbEmp.createEmployee)
app.get("/all",dbEmp.getEmployees)
app.get("/:id",dbEmp.getEmployeesByID)

app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))