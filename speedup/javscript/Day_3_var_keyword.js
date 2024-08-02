// var keyword 

var name='nitesh'
console.log(name);

// we can declare variable with same anem
var age=25
var age=30
console.log(age);

//we cam update value

var skill ='reactjs'
skill='mern'
console.log(skill);
// 

//scope global

var x=200
console.log(x);
if(true){
  var x=300;
  console.log(x);
}
console.log(x);


var y=100
console.log(y);
function demo(){
  var y=500
  console.log(y);
}

demo()