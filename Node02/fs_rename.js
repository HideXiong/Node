//引入核心模块
var fs = require('fs');

fs.rename('./image/baby.jpg', './image/杨颖.jpg', function(err) {
    if (!err) {
        console.group("修改成功");
    }
});