const fs = require("fs");
fs.unlink("index.txt", (err) => {
  if (err) return console.log(err);
  console.log("File deleted successfully!");
});
