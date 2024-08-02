const fs = require("fs");

// synchronus way

const data = fs.readFileSync("input.txt");
console.log("Synchronus Read : " + data.toString());

fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.log("Error while Reading the file");
  }
  console.log("Asynchronus Read : " + data.toString());
});

///file opening

fs.open("input.txt", "r+", function (err, data) {
  if (err) {
    console.log("Error while opening file");
  }
  console.log("file open succesfully");
});

//write data into file
fs.writeFile("input.txt", "welcome to node js lectures", function (err, data) {
  if (err) {
    console.log("Error while data into file");
  }
  console.log("Welcome to node js lecture");
});

//********************************* */

//append - it keeps the existing data write the given data after
const append = " this data is appended in File";
fs.appendFile("input.txt", append, function (err, data) {
  if (err) {
    console.log("Error while Appending the FIle");
  }
  console.log("file appended successfully");
});

//********************************* */

//Deleting an file
fs.unlink("input.txt", function (err, data) {
  if (err) {
    console.log("Error while deleting the file");
  }
  console.log("File Deleted Sucessfully");
});



r - read 
r+  raea and write 
// w  write as well as read 
//a-- append
 