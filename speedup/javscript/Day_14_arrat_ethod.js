

const arr=[100,200,250,350,450,650,200,350]
console.log(arr);

//index of
// console.log(arr.indexOf(200));
// lastIndexOf
// console.log(arr.lastIndexOf(200));
// console.log(arr.lastIndexOf(100000));

// console.log(arr.at(3));

//isArray  it cheks given array or not return boolean value
// console.log(Array.isArray(arr));//true
// console.log(Array.isArray(200));//false
// console.log(Array.isArray({}));//false
// console.log(Array.isArray([]));//true



//reverse()
const data=['nitish','nishi','prathmesh','sharad']
console.log(data);
console.log(data.reverse());
//sort() -- used to sort a given array alphabeticaly acending or decending

const data2=['zd','Abc','john','peter','pratik','sanket','nishi']
// console.log(data2.sort());
// console.log(data2.sort());

// const data3=[100,150,,300,100,500,800,220,260,140,60]
// console.log(data3.sort());
// console.log(data3.sort(function(a,b) {return a-b}));
// console.log(data3.sort(function(a,b) {return b-a}));



//cover  given array to String type 
const data4=["html",'bootstra','ccs','js']
console.log(data4);
//1👇 toString()-return  a new string element with coma seprated value
//2👇join()-return  a new string element with multiple seprator

console.log(data4.toString()); 
console.log(data4.join(' * '));

// 🔥fill() -fill start to end static element/data to the given array
//origonal  modified

const data5=['react','aws','angular','next','vue']
// console.log(data5);
// console.log(data5.fill("Front ENd")
// );
// console.log(data5);

//🔥valueOf() -return array itself()
//by default

const data6=[10,20,30,50,80,90,140,500,560]
// console.log(data6);
// console.log(data6.valueOf());


//includes() -check element is present or not return boolean
// console.log(data6.includes(1000));//false
// console.log(data6.includes(500));//true

//from()- return array from a given array object
const data7={id:1,name:'nikhil'}
console.log(data7);
const dataArray = [data7.id, data7.name];
console.log(dataArray);
//**************************** */

//keys() -return  an  Array Iterator object
//values()
//entries
const data8=[1000,2000,3000,4000,5000,6000,700,800]
console.log(data8);
console.log(data8.keys());

// for of return only vlaue
console.log(data8.values());


// concat()
// flat()

const Arr=[10,20,0,[80,90,100],[1000,1200,10]]
console.log(Arr);
console.log(Arr.flat());
//filter,find some every reduce
