var buff = new Buffer(26);
for (let i = 0; i < 26; i++) {
  buff[i] = i + 97;
}
console.log(buff.toString("ascii"));
console.log(buff.toString("ascii", 16, 23));
console.log(buff.toString("utf8", 0, 5));

// Buffer to JSON
var buff2 = new Buffer("First day");
var json = buff2.toJSON(buff2);
console.log(json);

//concatination of buffers
var buffer1 = new Buffer("Triazine ");
var buffer2 = new Buffer("Day first");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Concated Result: " + buffer3);

//Comparing Buffers
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(buffer1 + " --comes before-- " + buffer2);
} else if (result === 0) {
  console.log(buffer1 + " is same as " + buffer2);
} else {
  console.log(buffer1 + " comes after " + buffer2);
}

//Slicing buffer
var sliced = buffer2.slice(0, 3);
console.log("Sliced buffer: " + sliced.toString());

//Buffer Length
console.log("Length of Buffer1 is: " + buffer1.length);
