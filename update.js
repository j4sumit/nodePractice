const dbConnect =require('./mongodb');

const updateData= async ()=>{
let data =await dbConnect();
let result=await data.updateOne(   //data.update update all details based on given condition
    {name:"deepa"},{
        $set:{age:65,email:"dadiamma@gmail.com"}
    }
    )
    
    if(result.acknowledged){
        console.log("Data update successfully");
    }
}

updateData()
