var result = 0;

console.time('duration_sum');
for (var i = 1; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('sum from 1 to 1000: %d', result);

console.log(' The name of the currently executed file: %s',
    __filename);
console.log(' The name of the currently executed file: %s',
    __dirname);

var Person = {name: "June", age:20};
console.dir(Person);