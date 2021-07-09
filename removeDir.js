const fs = require("fs");
console.log("Deleting the directory!");
fs.rmdir("C:/Users/HP/Desktop/Day-1/temp", (err) => {
  console.log("Directory deleted successfully!");
});
