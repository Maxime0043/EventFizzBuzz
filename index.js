const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("FizzBuzz", function (number) {
  if (typeof number != "number") {
    console.log(number);
    return;
  }

  if (number % 5 == 0 && number % 3 == 0) console.log("FizzBuzz");
  else if (number % 5 == 0) console.log("Buzz");
  else if (number % 3 == 0) console.log("Fizz");
  else console.log(number);
});

emitter.emit("FizzBuzz", 15);
emitter.emit("FizzBuzz", 10);
emitter.emit("FizzBuzz", 3);
emitter.emit("FizzBuzz", 34);
emitter.emit("FizzBuzz", "Message");
