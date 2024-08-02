
const JsonData={
//string data
  name:"rachita",
  
  age:25,
  
personalInfo:{
  dateofbirth:"2nd june 2000",
  blodgrouL:"A"
},
  Hobbies:["reading","Swimingm","music"],
  
  //nested object
  // addres:{
    
  // }
  //boolean
  isStudent :true,

  job:null
}

console.log("json String Data",JsonData.name);
console.log("json number data",JsonData.age);
console.log("json Object data",JsonData.personalInfo.blodgrouL);
console.log("json Array data",JsonData.Hobbies);
console.log("json Boolean data",JsonData.isStudent);
console.log("json number data",JsonData.job);


// Data parsing 


const Array1='["Apple" ,"orange","watermelon"]'
console.log(typeof Array1);

const StringArray= JSON.parse(Array1)
console.log(StringArray);
console.log(typeof StringArray);

const Object1='{"id":1,"name":"nishi"}'
console.log(typeof Object1);

const StringObject= JSON.parse(Object1)
console.log(typeof StringObject);

//STRING CONVERSION

const Array2=["Apple" ,"orange","watermelon"]
console.log(typeof Array2);
const ObjectArray=JSON.stringify(Array2)
console.log(typeof ObjectArray);