const life= new Date();
let hello=life;

do{
    hello=Object.getPrototypeOf(hello);
    console.log(hello);
}while(hello);

