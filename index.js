const dbConnect= require('./mongodb')
//console.log(dbConnect());// Its returning Promise
//Using Promise
dbConnect().then((resp)=>{
resp.find().toArray().then((data)=>{
    console.log(data)
})
})

//Using Async await
// const main =async ()=>{
// let data= await dbConnect();
// data=await data.find().toArray();
// console.log(data)
// }
// main()
