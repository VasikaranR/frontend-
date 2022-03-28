const personPrototype = {
    greet() {
      console.log('hello!');
    }
  }
  
  const carl = Object.create(personPrototype);
  carl.greet();  // hello!
  