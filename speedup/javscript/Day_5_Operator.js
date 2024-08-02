//operator perform mathematical operati

// a+b -operand
// + -  operator

// basic 
// Arithatic operatoe
// unary op 
// binary op 

// Arithmatic op:  - + * /%
//Assignment op -  =,-=,+=,/=,%=


// comparison op : > ,<,>=,<=,
// equality op : == ,====

// logical op : && || !


// bitwise : & | ^ `(Not),<<<,>>>,>>,<<

//*********** */

// ternary op 
// exponential  op 
// nulish colascheing op 
// typeof 



let a=20
let b=10
console.log(a+b);//30
console.log(a-b);//10
console.log(a*b);//200
console.log(a/b);//2
console.log(a%b);//0


// priority 
//higher precedence */%than+ -

console.log(a+b*a);
console.log(a+b/a);
console.log(a+b/a);
console.log(a+b+a);


//increment decrement op

// pre ++a
// post a++

// let x=20;
// x++;
// console.log(x); //21


// let x=10;
// ++x;//1
// x++;//12

// console.log(x);


let x=10
x++;
console.log(x++);
console.log(x);


console.log(--x);

console.log('****************');
// let y=20
// y++//21
// ++y//22
// console.log(--y);//21
// console.log(y++);//21
// y--//21
// ++y//22
// console.log(++y);//23
// console.log(y++);//23
// console.log(y);

// console.log('****************');

//asssignment
//
let c=20
let p=c
console.log(c);//20
console.log(p);//20


console.log(c+=p); //c=c+p
console.log(c-=p);//c=40-20
console.log(c*=p);//400


// console.log('****************');

//equality operator
//== ,===
//== cheks only value
//===  cheks  values withb  their data types


let X=100
let Y=200
// console.log(X=Y);

console.log(X==Y);//false
console.log(X===Y);//false

let no1=20;
let no2='20'
// typeof op  to check data types of assogned value while varible declaration

console.log();
console.log(no1==no2);
console.log(no1===no2);//===  cheks  values withb  their data types

// console.log('****************');
//comparison op

//> ,<,>=,<=,

console.log(10>20);//false
console.log(10>=10);//true
console.log(10>10);//false

// console.log('****************');
//logical op
// to chek 2 or more conditonal at a same time
// && and --mus all condition true
//||  or  - any 1 condition true then return true
//!   not -  return true when conditons become false  ,return false when condition becomes true


// /true - 1
// false - 0

// logical ANd
// 1 && 1 = 1
// 1 && 0 = 0
// 0 && 1 = 0
// 0 && 0 = 0

// local or ||


// logical ANd
// 1 || 1 = 1
// 1 || 0 = 1
// 0 || 1 = 1
// 0 || 0 = 0
console.log('****');
let n1=20
let n2=50
let n3=40

console.log(n1<=n2 &&  n1<=n3);//1

console.log(n1>=n2 & n1<=n3);//false 0 && true 1 =0


console.log(n1>=n3 || n1<=n3 || n2>=n3);// //true


console.log(n1!=20);

// *******************************************

//bitwise op
// & | ^ (Bitwise XOR) ~(Not op),<<,<<<,>>>,>> 


