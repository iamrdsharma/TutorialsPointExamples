const http = require("http");
const options = {
  host: "localhost",
  port: "8080",
  path: "/index.html",
};

const callback = function (response) {
  var body = "";
  response.on("data", function (data) {
    body += data;
  });
  response.on("end", function () {
    console.log(body);
  });
};
var req = http.request(options, callback);
req.end();
