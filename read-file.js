const fs = require("fs");

//Synchronous Read:
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
//console.log('Program Ended');

//Asynchronous Read
var data = fs.readFile("input.txt", function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});
console.log("Program Ended");
