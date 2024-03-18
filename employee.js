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

const getEmployeesByID =(req,res)=>{
    let id =parseInt(req.params.id)
    pool.query("select * from emoployees where id=$1",[id],(err,result)=>{
        if(err){
            throw err;
        }
        res.json({data:result.rows})
    })
}

const updateEmp=(req,res)=>{
    let id =parseInt(req.params.id)
    const {name,email}=req.body
    pool.query("update emoployees set name=$1, email=$2 where id=$3",[name,email,id],(err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            data:"updated successfully"
        })
    })
}

const deleteEmp=(req,res)=>{
    let id =parseInt(req.params.id)
    pool.query("delete from emoployees where id=$1",[id],(err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            msg:`Employee with ${id} Deleted Successfully`
        })
    })
}

//search employees based on name or email
const searchEmployees = (req, res) => {
    let key = req.params.key;
    pool.query("SELECT * FROM emoployees WHERE name ILIKE $1 OR email ILIKE $1", [`%${key}%`], (err, result) => {
        if (err) {
            console.error("errerrerrerr",err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ data: result.rows });
    });
};

module.exports ={createEmployee,getEmployees,getEmployeesByID,updateEmp,deleteEmp,searchEmployees}