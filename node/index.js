const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();

const newCounterObject = require('./myscript.js');

console.log(newCounterObject.getCounter());