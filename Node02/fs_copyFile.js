//引入核心模块fs
var fs = require('fs')

fs.copyFile('./image/timg.jpg', './image/baby.jpg', function(err) {
    if (!err) {
        console.log('复制成功')
    }
})