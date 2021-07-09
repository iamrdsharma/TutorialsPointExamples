const fs = require("fs");
fs.writeFile(
  "sample.txt",
  "File edited with async writeFile.",
  "utf-8",
  (err) => {
    if (err) return console.log(err);

    console.log("File written successfully!");
    console.log("Now let us read the newly created file");
    fs.readFile("sample.txt", (err, data) => {
      if (err) return console.log(err);
      console.log("Async read: " + data.toString());
    });
  }
);
