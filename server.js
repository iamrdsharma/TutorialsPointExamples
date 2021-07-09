const http = require("http");
const fs = require("fs");
const url = require("url");
http
  .createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for: " + pathname + " is received");

    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404, { "Content-Type": "text/html" }); // Page not found!
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data.toString());
      }
      res.end();
    });
  })
  .listen(8080);
console.log("Server running at 127.0.0.1:8080/");
