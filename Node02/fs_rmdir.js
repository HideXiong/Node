//引入核心模块
var fs = require('fs');

fs.rmdir('./info01', function(err) {
    if (!err) {
        console.log("删除成功");
    }
});