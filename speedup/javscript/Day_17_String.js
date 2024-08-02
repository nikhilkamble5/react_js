


var str3="mern stack"
console.log(str3[3]);//n
console.log(str3[2]);//r
console.log(str3[5]);//r


var str4='react js'
console.log(str4.length);

//🔥1 slice(- work on string and array)
//- ve index allowed
///extrack part of astring
//return a new string

// systnax slice(start,end(last index ignore))
console.log(str4.slice(2,5));
console.log(str4.slice(2));

//substring
//similiar to slice()
// -ve index not allowed
// console.log(str4.substring(2,5));
// console.log(str4.substring(-3,-1));

//*************************** */

//substr()
//extraact part of string
// syntax similar to string 

//substr(start,length)
// console.log(str4.substr(2,5)+);

//************************ */

//🔥toUppercase ,lowercase

console.log(str4.toUpperCase());//REACT JS
console.log(str4.toLowerCase());//react js
//************************ */


//🔥 conver array to string

// toString
//join

//conver String to array
//split

let skill="Frond End Devloper"
console.log(skill);
console.log(skill.split());

//seprate split by spacing
console.log(skill.split(''));//by character
console.log(skill.split(' '));// by spacing

//logical string reversing
console.log(skill.split(' ').reverse().join());

//************************ */

//concat
var str6="abc"
var str7 ='pqr'
console.log(str6+str7);
console.log(`${str6} + ${str7}`);
console.log(str7.concat(str6));


//************* */
//replace (search,replace content)
let str8="html css js react"
console.log(str8);
console.log(str8.replace('js','modern js'));

//******************* */
//includes
console.log(str8.includes("css"));
//*********** */
//trim() -remove white sspacing
var str9=" mern stack "
console.log(str9);
console.log(str9.length);//12

var res1=str9.trim();
console.log(res1);
console.log(res1.length);

var res2=str9.trimStart();
console.log(res2);
console.log(res2.length);

var res3=str9.trimEnd();
console.log(res3);
console.log(res3.length);

//************** */

// 🔥 pad -fill static data to string to reach its maximum length
// padStart()  - attach a string type of a data to given stirng to reaches maximum length

var a="ABC"
console.log(a);

// console.log(a.padStart(maxlength,'fill static data'));
console.log(a.padStart(10,"#"));
console.log(a.padStart(5,"*"));
console.log(a.padEnd(5,"*"));






