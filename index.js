const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("FizzBuzz", function (number) {
  if (typeof number != "number") {
    console.log(number);
    return;
  }

  console.log(number);
});

emitter.emit("FizzBuzz", 5);
emitter.emit("FizzBuzz", "coucou");
