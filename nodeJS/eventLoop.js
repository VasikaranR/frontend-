const fs = require('fs')

//callstack
console.log('callstack - start');

//Macro task(task)
setTimeout(()=> {
    console.log('macro -timeout executed by 4000ms');
}, 4000);


//Micro Task(job)
new Promise((resolve, reject) => {
        resolve("micro - Promise executed")
})
.then(data => console.log(data))
.catch(err => console.log(err))


//micro Task
process.nextTick(()=>console.log("micro - process.nextTick is executed"))

//callstack
for (const value of [1,2,3]) {
    console.log("callstack "+value);
}

//macro task
setTimeout(()=> {
    console.log('macro - timeout executed by 1000ms')
}, 1000);



//callstack
function funct() {
    console.log('callstack - end');
}

funct();