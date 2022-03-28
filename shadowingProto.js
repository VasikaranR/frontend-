const myDate = new Date(1959, 11, 17);

console.log(myDate.getYear());

myDate.getYear = function() {
   console.log('something else!')
};

console.log(myDate.getYear());