//引入核心模块
var fs = require('fs');
var http = require('http');

//创建服务
var server = http.createServer();
//注册请求事件
server.on('request', function(request, response) {
    //如果读不是普通文本，请不要设置字符格式
    if (request.url == '/') {
        fs.readFile('../Node01/baby/baby04.jpg', function(err, data) {
            if (!err) {
                response.end(data);
            } else {
                console.log(err);
                response.end();
            }
        })
    } else if (request.url == '/baby') {
        fs.readFile('../Node01/baby/baby01.jpg', function(err, data) {
            if (!err) {
                response.end(data);
            }
        });
    } else {
        response.setHeader('Content-type', 'text/palin;charset=utf-8');
        response.end('baby不出来');
    }
}).listen(3000);