let today=new Date()

console.log(today);

//seprate date
console.log(new Date().getFullYear());

//month
console.log(today.getMonth());
console.log(today.getMonth()+1);

//day
console.log(today.getDay());

console.log(today.getDate());

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getMilliseconds());
// *****************
console.log('****************************');
//set date
// let newDate=new Date('2025 AUg 25,10:10:10:');

let newDate=new Date()
newDate.setMonth(7)
newDate.setFullYear(2030)
console.log(newDate);
//*********************************************** */
console.log('@@@@@@@@@@@@@');

// toLocaleTimeString - -return only current time
//
// var result =new  Date();
// // alert(result)
// result.toLocaleTimeString()


//*********************************************** */

//math object
let res= Math;
console.log(res);

//pi
console.log(Math.PI);
console.log(Math.LN2);
console.log(Math.LN10);

//Method
//min 
//max

console.log(Math.min(20,40,55,350,70,901,100));//20
console.log(Math.max(20,40,55,350,70,901,100));//901



//array

const arr=[100,3000,3000,450,650,120,340,890,2500]
console.log(Math.min(arr));

//Modern Js
//spread operator -extract value from a given array

console.log(Math.min(...arr));
console.log(Math.max(...arr));

//*********************************************** */
//round()-returnrounded value-0.5- largest integer < 0.5 return smallest integer

//floor()-return nearest smallest integer value
//ceil()-return nearest largest intiger value


var a=23.56;
console.log(Math.round(a));//24
console.log(Math.floor(a));//23
console.log(Math.ceil(a));//24

console.log(Math.round(55.23));
console.log(Math.floor(55.23));//23
console.log(Math.ceil(55.23));//24


console.log(Math.floor(-44.45));//-45
console.log(Math.ceil(-45.45));//24


//****************** */
//fround() -return 32 bit single  presion flaot representation of a number

console.log(Math.fround(23.1));
//****************** */


//sqrt()
//cbrt()
//pow()

console.log(Math.sqrt(25));
console.log(Math.sqrt(625));
console.log(Math.sqrt(144));


console.log(Math.cbrt(27));//3
console.log(Math.cbrt(8));//2
console.log(Math.cbrt(625));//


//pow

console.log(Math.pow(10,3));//1000

//exponentiation

console.log(10**3);

//******************** */

//trunc -remove decimal values and retun


console.log(Math.trunc(23.36));//23
console.log(Math.trunc(23.83));//23


//random method- used to generate random number
//retunr psudo  random number between  0 & 1
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.trunc(Math.random()*100));


//4 digit
console.log(Math.floor(Math.random()*10000));




