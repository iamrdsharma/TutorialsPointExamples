const fs = require("fs");
console.log("Reading the directory");
fs.readdir("C:/Users/HP/Desktop/Day-1/temp", (err, files) => {
  if (err) return console.log(err);
  files.forEach((file) => {
    console.log(file);
  });
});
