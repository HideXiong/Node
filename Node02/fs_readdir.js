//引入核心模块
var fs = require('fs');
fs.readdir('../Node01', function(err, data) {
    if (!err) {
        console.log(data);
    }
});