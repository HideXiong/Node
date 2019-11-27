/**
 * 1.根据用户输入的url，读取不同的图片
 * 
 */
//引入核心模块
var http = require('http');
var fs = require('fs');

//创建服务实例对象
var server = http.createServer();

//注册请求监听事件
server.on('request', function(request, response) {
    if (request.url == '/baby') {
        fs.readFile('baby/timg.jpg', function(err, data) {
            if (!err) {
                response.end(data);
            }
        });
    } else if (request.url == '/') {
        fs.readFile('baby/timg (1).jpg', function(err, data) {
            if (!err) {
                response.end(data);
            }
        })
    } else {
        fs.readFile('baby/美翻了.jpg', function(err, data) {
            if (!err) {
                response.end(data);
            }
        })
    }
}).listen(3000, function() {
    console.log('服务器已经启动，通过http://127.0.0.1:3000/访问');
});