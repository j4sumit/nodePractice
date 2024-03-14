const dbConnect= require('./mongodb');

const insert=async ()=>{
    const db= await dbConnect();
    const result = await db.insertMany(   //insertOne
       [
        {name:"pooja1", age:25, email:"pooja1@gmail.com"},
        {name:"divya", age:25, email:"divya@gmail.com"},
        {name:"deepa", age:25, email:"deepa@gmail.com"}
       ] 
    )
    // console.log(result)  //give Output -acknowledged,insertedCount,insertedIds
    if(result.acknowledged){
        console.log("Data Inserted");
    }  
}
insert()