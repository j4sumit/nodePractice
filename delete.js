const dbConnect=require("./mongodb")

const deleteData=async ()=>{
    let data= await dbConnect();
    let result=await data.deleteOne(    //deleteMany delete multiple record
        {age:25}
        )
 if(result.acknowledged){
    console.log("Data Deleted Successfully")
 }
}

deleteData()