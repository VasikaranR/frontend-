let stocks ={
    fruits:["apple","strawberry","grapes","banana"],
    liquids:["water","ice"],
    holder:["cone","cup","sticks"],
    toppings:["chocolate","peanuts"],
 
 };

 
 let order =(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    },2000)
    
 };
 let production =()=>{
   setTimeout(()=>{
    console.log("production has started");

    setTimeout(()=>{
        console.log("the fruits has been chopped");

        setTimeout(()=>{
            console.log(`${stocks.liquids[0]}and ${stocks.liquids[1]}was added`);

        setTimeout(()=>{
            console.log("machine has been started");

            setTimeout(()=>{
             console.log(`icecream was placed on the ${stocks.holder[0]}`);

             setTimeout(()=>{
              console.log(`the toppings selected is ${stocks.toppings[0]}`);

               setTimeout(()=>{
              console.log("serve the icecream");
               },2000)
             },3000)
            },2000)
        },1000)
        },1000)

    },2000);
   },0000)
   
 };

 order(0,production);
 