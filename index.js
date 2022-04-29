const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("FizzBuzz", function (number) {
  if (typeof number != "number") {
    console.log(number);
    return;
  }

  if (number % 5 == 0) console.log("Buzz");
  else console.log(number);
});

emitter.emit("FizzBuzz", 15);
emitter.emit("FizzBuzz", 3);
