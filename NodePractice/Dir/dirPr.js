//加载核心模块
var http = require('http');
var fs = require('fs');
var htmlStr = '';

//创建服务
var server = http.createServer();

//注册request请求事件
server.on('request', function(req, res) {
    //读取要获取到的目录数据
    fs.readdir('../../../Node学习', function(err, data) {
        //读取要渲染的html内容
        fs.readFile('dir.html', function(err, info) {
            if (!err) {
                htmlStr = info
            }
        })
        if (!err) {
            var html = '';
            data.forEach(function(item) {
                html += '<li><a href="">' + item + '</a></li>';
            })
            htmlStr = htmlStr.toString();
            htmlStr = htmlStr.replace('*', html)
                //响应到页面
            res.end(htmlStr);
        } else {

        }
    });
}).listen(3000);