const Pool = require("pg").Pool

const pool =new Pool({
    user:process.env.user,
    host:"localhost",
    password:process.env.password,
    port:5432
})

const createEmployee=(req,res)=>{
    const {name, email}=req.body;
    pool.query(
        "INSERT INTO emoployees(name, email) VALUES($1,$2) RETURNING *",
        [name, email],
        (err, result)=>{
            if(err){
                console.log(err);
                throw err;
            }
            res.status(200).json({
                msg:"Data created successfullyt",
                data:result.rows[0]
            })

        }
    )

}

const getEmployees =(req,res)=>{
    pool.query("select * from emoployees",(err,result)=>{
        if(err){
            throw err;
        }
        res.json({data:result.rows})
    })
}
module.exports ={createEmployee,getEmployees}