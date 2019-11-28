//引入核心模块
var fs = require('fs');

fs.unlink('./image/timg.jpg', function(err) {
    if (!err) {
        console.log('删除成功');
    }
});