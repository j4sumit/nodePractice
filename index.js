let a =10;
let b=0;
setTimeout(() => {
   b=20 // drawback of settimeout value of b not getting update and its getting print only 10
}, 2000);
console.log(a+b);