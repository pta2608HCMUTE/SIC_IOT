// ĐỌC TỆP KHÔNG ĐỒNG BỘ
var fs = require('fs');

fs.readFile('./package-lock.json', 'utf8', function(err,data) {
    console.log(data);
});

console.log('Request to read package.json file ' +
    'in the project folder.'
);