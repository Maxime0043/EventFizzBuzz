const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("FizzBuzz", function (number) {
  console.log(number);
});

emitter.emit("FizzBuzz", 5);
