// let a =10;
// let b=0;
// setTimeout(() => {
//    b=20 // drawback of asynchronous, value of b not getting update and its getting print only 10
// }, 2000);
// console.log(a+b);

//Promise Example
let a=20;
let b=0;
let waitingData= new Promise((resolve, reject)=>{
setTimeout(() => {
    resolve(50)
}, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})