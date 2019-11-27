//引入核心模块
var fs = require('fs');
//想要增加的字符串
var str = "嘿嘿";
var days = new Date();
//异步操作
fs.access('info/log.txt', function(err) {
    if (!err) {
        fs.appendFile('info/log.txt', days, function(err) {
            if (!err) {
                fs.readFile('info/log.txt', function(err, data) {
                    if (!err) {
                        console.log(data.toString())
                    }
                })
            }
        })
    }
});
//同步操作
try {
    fs.accessSync('../info')
} catch (err) {
    console.log("不存在");
}

fs.access('./image/timg.jpg', function(err) {
    console.log(err ? '不存在' : '存在');
});

fs.stat('./image/timg.jpg', function(err, data) {
    console.log(data);
})