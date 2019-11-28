//引入fs模块
var fs = require('fs');
fs.stat('./info/log.txt', function(err, data) {
    if (!err) {
        console.log(data)
    }
});

fs.stat('./image/timg.jpg', function(err, data) {
    if (!err) {
        console.log(data);
    }
});