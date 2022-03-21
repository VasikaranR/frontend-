const car={
    carname:"bmw",
    carmodel:54,
    carspeed:"450kmp"


}
car.carname="benz";
console.log(car.carname+ " "+car.carmodel);

/*similar to let but you cannot modify the field 
// see only if you have the carname cons you cannot change it because the object 
is only in const not the field simillarly if you try to add new property to the const object 
named car it will not accept*/