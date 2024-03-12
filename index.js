console.log("Starting up");

setTimeout(() => {
    console.log("execute after 2 second");
}, 2000);

setTimeout(() => {
    console.log("execute after 0 second");
}, 0);

console.log("Finishig up")