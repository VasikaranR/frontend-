// let arr=[1,2,3,4]
// let[x,y,...rest]=arr
// console.log(x,y,rest)

//takes n number of argumenyts and returns as an array 
function fun(...rest){
    return rest
}

let result=fun(1,2,3,4,5,6,7,8)
console.log(result)