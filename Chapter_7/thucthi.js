var result = 0;

console.time('duration_sum');
for (var i = 1; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('sum from 1 to 1000: %d', result);