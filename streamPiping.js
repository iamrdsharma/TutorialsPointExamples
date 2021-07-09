const fs = require("fs");

const readerStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("result.txt");

//piping
readerStream.pipe(writableStream);
console.log("Program Ended!");
