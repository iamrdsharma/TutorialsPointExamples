const fs = require("fs");
console.log("Creating Directory /temp");
fs.mkdir("C:/Users/HP/Desktop/Day-1/temp", (err) => {
  if (err) return console.log(err);
  console.log("Directory created successfully!");
});
