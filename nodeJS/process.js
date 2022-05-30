const argument = (process.argv.slice(2));
const sum = argument.reduce((acc,val)=> acc+parseInt(val),0);
console.log(sum);
process.stdout.write("bye bye");
