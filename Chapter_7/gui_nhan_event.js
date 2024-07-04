process.on('tick', function(count) {
    console.log('tick event occurs: %s', count);
});
setTimeout(function() {
    console.log('attempt to pass tick event in 2 seconds.');
    process.emit('tick', '2');
}, 2000);