let myObj = { name: "Chris", age: 38 };
let myString = JSON.stringify(myObj);
let par=JSON.parse(myString);
console.log(myString);
console.log(par);

//parse() accepts the JSON string and converts it into a js object
//stringify() accepts the object as a parameter and returns the JSON string 