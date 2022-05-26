setImmediate(() => console.log("setImmediate is called"))
setTimeout(() => console.log("setTimeout executed"),1000)
var count = 0
let result = setInterval(()=>{
    if(count < 5)
      console.log("Hello")
    else
      clearInterval(result)
    count++
    },1000)
var promise=new Promise((res,rej)=>{
    res();

}).then(()=>console.log("resolve"))
process.nextTick(()=>{
    console.log("Processing nextTick ")
})
console.log("Start")