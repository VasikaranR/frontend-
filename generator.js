function* myGen()  {  
    yield 'hi';  
    yield 'hello';  
    return 'welcome';  
    yield 'bye';  
    }  
    let genobj = myGen();  
      
    console.log(genobj.next().value);     
      
    console.log(genobj.next());   
      
    console.log(genobj.next());    
      
    console.log(genobj.next());
