var houseKeeper ={
    name:"kamali",
    workExp:"2 years",
    age:29,
    contact:4785612347,
    spouse: true,

    work:function(a,b) {
        return("the working hours :"+a+ "and ends with "+ b);
    }
    
}
console.log("house keeper name:"+houseKeeper.name);
console.log("house keeper experience:"+houseKeeper.workExp);
console.log("house keeper age:"+houseKeeper.age);
console.log("house keeper contact number:"+houseKeeper.contact);
console.log("has a spouse :"+houseKeeper.spouse);
var result=houseKeeper.work(9,5);
console.log(result);