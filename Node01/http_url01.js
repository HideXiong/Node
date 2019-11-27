/**
 * 1.根据用户输入不同的url，响应不同的内容
 *  
 */
//加载核心模块；
var http = require('http');

//创建服务实例
var server = http.createServer();

//注册请求事件
server.on('request', function(request, response) {
    //这是响应头编码格式
    response.setHeader('Content-type', 'text/palin;charset=utf-8');
    console.log(request.url);
    if (request.url == '/') {
        response.write("我是首页");
    } else if (request.url == '/login') {
        response.write('我是登录页');
    } else if (request.url == '/center') {
        response.write('我是中心页');
    } else {
        response.write('页面走丢了，sorry！！！！！！！');
    }
    response.end();
});
//设置端口号
server.listen(3000, function() {
    console.log("创建服务成功，可以通过http://127.0.0.1:3000/访问了");
})