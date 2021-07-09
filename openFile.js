const fs = require("fs");

//Opening 'input.txt' in read and write mode
console.log("Started to open the file");
fs.open("input.txt", "r+", (err, fd) => {
  if (err) console.log(err);
  console.log("File opened successfully");
});
//Getting stats of the 'input.txt' file
console.log("Getting the info of the file");
fs.stat("input.txt", (err, stats) => {
  if (err) return console.log(err);
  console.log(stats);
  console.log("Got the file info!!!");
  console.log("isFile?" + stats.isFile());
  console.log("isDirectory" + stats.isDirectory());
});
