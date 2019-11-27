//引入http模块
var http = require('http');
//创建服务
var server = http.createServer();
//注册request请求事件，当客户端请求过来，就会执行回调函数
server.on('request', function() {
    console.log('收到客户端的请求了');

});
//绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器已经启动成功');
});