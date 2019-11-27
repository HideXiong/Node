var http = require('http');

var server = http.createServer();
//request请求事件处理函数，要接收两个参数，一个是request（请求对象，用来获取客户端的请求信息）,一个response（响应对象，用来给客户端发送相应消息）
server.on('request', function(request, response) {
    console.log('收到客户端请求了，请求路径是' + request.url);
    response.setHeader('Content-type', 'text/palin;charset=utf-8');
    // 'Content-type':内容类型
    // 'text/palin':普通文本 
    // 'text/html':html文本
    // 'charset=utf-8':编码格式
    //*注意：一定要再响应内容之前设置，写在响应内容之后会报错
    //write可以使用多次，但是一定要用end结束，否则，浏览器会一直等待着
    response.write('hello node');
    response.write('你好啊，node');
    //告诉客户端，请求发完了，可以称帝给用户看了
    response.end();
})

server.listen(3000, function() {
    console.log('创建服务成功，可以通过http://127.0.0.1:3000/来访问了');
})