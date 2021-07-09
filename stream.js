const fs = require("fs");
// var data = "";
// //Readable Stream
// const readerStream = fs.createReadStream("input.txt").setEncoding("utf-8");
// readerStream.on("data", function (chunk) {
//   data += chunk;
// });
// readerStream.on("end", function () {
//   console.log(data);
// });
// readerStream.on("error", function (err) {
//   console.log(err.stack);
// });
// console.log("Program Finished!");

//Writable Stream
const data = "Day first at Triazine";
const writableStream = fs.createWriteStream("output.txt");
writableStream.write(data, "utf-8");
writableStream.end();

writableStream.on("finish", () => {
  console.log("Writing the stream completed");
});
writableStream.on("error", (err) => {
  console.log(err.stack);
});
console.log("Program Ended!");
