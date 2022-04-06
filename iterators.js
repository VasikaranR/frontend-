const language=['c','c++','java','python'];
const it=language[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next().value);
console.log(it.next());