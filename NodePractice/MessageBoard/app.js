//留言板入口文件
var fs = require('fs');
var http = require('http');
var url = require('url');
var template = require('art-template');
var comments = [];

//创建服务
http.createServer(function(req, res) {
    var parseObj = url.parse(req.url, true); //将ur解析成一个方便操作的对象
    var pathname = parseObj.pathname;
    console.log(pathname);
    if (pathname == '/') {
        fs.readFile('./views/index.html', function(err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            }
        });
    } else if (pathname.indexOf('/public') == 0) {
        fs.readFile('.' + pathname, function(err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    } else if (pathname == '/post') {
        fs.readFile('./views/post.html', function(err, data) {
            res.end(data)
        })
    } else if (pathname == '/pinglun') {
        var content = parseObj.query;
        comments.push(content);
        res.statusCode = 302; //状态码
        res.setHeader('Location', '/') //
        res.end();
    } else {
        fs.readFile('./views/404.html', function(err, data) {
            res.end(data)
        });
    }
}).listen(3000);