var Calc = require('./calc3');
var calc = new Calc();
calc.emit('stop');
console.log('stop event sent to ' + Calc.title);