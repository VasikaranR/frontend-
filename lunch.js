var names=["vasi","alex","hulk","batman"];
function whosPaying(names){
    var numberOfPeople=names.length
    var randomPersonPosition=Math.floor(Math.random()*numberOfPeople);
    var randomPerson=names[randomPersonPosition];
    return randomPerson +" is paying for lunch";
    
}
console.log(whosPaying(names));