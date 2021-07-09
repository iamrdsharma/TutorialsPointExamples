var fs = require("fs");
var buff = new Buffer(1024);

fs.open("input.txt", "r+", (err, fd) => {
  if (err) return console.log(err);
  console.log("File opened!");
  console.log("Reading the file...");
  fs.read(fd, buff, 0, buff.length, 0, (err, bytes) => {
    if (err) return console.log(err);

    if (bytes > 0) {
      console.log(buff.slice(0, bytes).toString());
    }
    //Closing the opened file
    fs.close(fd, (err) => {
      console.log("File closed!");
    });
  });
});
