let stocks ={
    fruits:["apple","strawberry","grapes","banana"],
    liquids:["water","ice"],
    holder:["cone","cup","sticks"],
    toppings:["chocolate","peanuts"],
 
 };

 let is_shop_open= true;

 let order =(time,work)=>{
    
    return new Promise((resolve,reject)=>{
       if(is_shop_open){
           setTimeout(()=>{
            resolve(work())
           },time)
           
       }
       else{
           reject(console.log("sorry our shop is closed "))
       }
    }  )
 }

 order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

 .then(()=>{
     return order(0000,()=>console.log("production has started"));
 })

 .then(()=>{
     return order(2000,()=>console.log("the fruit was chopped "));
 })

 .then(()=>{
     return order(1000,()=>{
         console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`);
     })
 })

 .then(()=>{
     return order(1000,()=>console.log("start the machine "))
 })

 .then(()=>{
     return order(2000,)
 })