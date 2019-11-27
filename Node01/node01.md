## Node是什么？
- 不是语言，也不是框架和库
- 是JavaScript运行时的环境，能够解析JavaScript代码
- 构建与Chrome V8 JavaScript引擎之上
- 为JS提供了服务端编程的能力
   - 文件IO能力
   - 网络IO能力

## 查看Node的版本
打开命令行，输入node --version 或者node -v
## REPL
和浏览器的Console一样，可以做一些基本的代码测试和执行
- R:Read读取
- E:Eval执行
- P:Print输出
- L:Loop循环
## 具体操作
- 进入命令行，输入node回车即可
- 输入要执行的代码
- 按住Ctrl不要丢，接着C两次就好
## 执行我的第一个JS文件
**1.新建hello_node.js的文件**
`console.log('Hello Node.js')`
**2.打开命令行且定位到文件所在目录**
**3.在命令行输入node hello_node.js**
- 文件名不能有中文
- 不能叫做node.js
- 不能出现空格 
## 用node构建服务器
1.引入核心模块
`var http = require('http');`
2.创建server实例对象
`var server = http.creatServer();`
3.注册请求事件
```
server.on('request',function(request,response){
    //设置响应头编码格式,一定要写在响应内容之前，否则会报错
    response.setHeader('Content-type','text/palin;charset=utf-8');
   //设置响应内容
   response.write('第一握手');
   //响应结束，一定要记得告诉客户端响应结束了，否则客户端会一直等着
   response.end();
});
```
4.绑定端口号
```
server.listen(3000,function(){
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/访问了');
})
```
