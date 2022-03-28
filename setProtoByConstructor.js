const userPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype = userPrototype;
  Person.prototype.constructor = Person;
  
  const result= new Person('vasi');
  result.greet();