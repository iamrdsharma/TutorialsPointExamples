const events = require("events");
const eventEmitter = new events.EventEmitter();

// var connectionHandler = function () {
//   console.log("connection successful!");
//   eventEmitter.emit("data_received");
// };
// eventEmitter.on("connection", connectionHandler);

// eventEmitter.on("data_received", function () {
//   console.log("Data received successfully!");
// });
// eventEmitter.emit("connection");
// console.log("Program ended");
var listener1 = function () {
  console.log("Listener-1 executed!");
};
var listener2 = function () {
  console.log("Listener-2 executed!");
};
eventEmitter.on("connection", listener1);
eventEmitter.addListener("connection", listener2);
var listeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(listeners + " Listener(s) listening to connection event");
//Firing the event
eventEmitter.emit("connection");
eventEmitter.removeListener("connection", listener1);
console.log("Listener1 will not stop listening now");
//Event fire
eventEmitter.emit("connection");
listeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(listeners + " listener(s) listening to the connection event");
console.log("Program ended.");
