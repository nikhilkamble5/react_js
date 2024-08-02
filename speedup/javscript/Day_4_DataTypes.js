//data types

//priitave data types : built in data types 
//non premitive data types :driven from premetives dt,defined by devloper

//array object
//*************** */

// PDT  number sting boolean null undefined symbol bigint

// NPDT : array   objhect

let age=20
console.log(age);
console.log(typeof age);//nu,ber

// strimg  : store data or a single value in  "" or '
//collection of character

var name='sanket'
console.log(name);
console.log(typeof name);

//bolean value
var iseligible=true
console.log(iseligible);
console.log(typeof iseligible);

//********************* */


// null 

var empid=null
console.log(empid);//null
console.log(typeof empid);//object as per expert is bug in js



// //emty data
// var role=""
// console.log(role);
// console.log(typeof role);


//undefonded
// when we declare varible  but not initialize  any value i;e undefined
var pid

console.log(pid);



//symbol : call to symbol function and values ust be unique


var a=20
var b=20
console.log(a==b);

//symbol()

console.log(Symbol(a)===Symbol(b));//false


let obj={
  name:'pratik',
  skil:'mern',

}

console.log(obj);

//****************** */

// NPDT 
// Arry object
//is a collection of similar or diffren tyoes of element

//we can stor multiple type of element in a sinlge varible 
//start indexxing f rom 0

const arr=[1000,'nishi',true,null,undefined,[],{}]
console.log(arr);

//type of arr
console.log(typeof arr);// object
//Array is special type of object in javascript


//object 
//is aentity having methods and properties 

// we can stor large amount if daata

//stored data in key value pair


const obj3={
  ///key:valiue

  id:1,
  name:'pratik',
  role:'mern',
  mobile:987654321,
  iseligible:true,
  empid:null, 
  empskill:['html','css','react'],
}

console.log(typeof obj3);