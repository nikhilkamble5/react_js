// console.log("welcom to ned");




const os = require("os");

console.log(os.cpus().length);


async function count() {
  for (let i = 0; i <= 5; i++) {
    await console.log("welcome to Node Js  ", i);
  }
}

count();

 function welcome() {
  for (let i = 0; i <= 5; i++) {
     console.log("Count is", i);
  }
}

welcome();
