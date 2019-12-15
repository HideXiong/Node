### Express的基本使用
- Express不对Node.js已有的特性进行二次抽象，只是在它之上扩展了Web应用所需的基本功能。
- [Express 官网](http://expressjs.com/)
- [Express中文文档（非官方)](http://www.expressjs.com.cn/)
- [Express GitHub仓库](https://github.com/expressjs/express)

```shell
# 创建并myapp目录并切换到该目录下
mkdir myapp
cd myapp

# 初始化package.json文件
npm init --y

# 安装 erpress到项目中
npm install express --save
```

#### Hello World

参开文档：http://expressjs.com/en/starter/hello-world.html

```javascript
// 加载express
var express =require('express')

//调用express(),得到app对象
//类似于 http.creatServer();

var app = express();

//设置请求对应的处理函数
//当客户端get方式请求/的时候，就会调用第二个参数——请求处理函数
app.get('/',function(req,res){
    res.send('Hello World');
})

//监听端口号，启动web服务
app.listen(3000,function(){
    console.log('服务已经启动，端口号为3000')
})
```

#### express基本路由

参考文档： http://expressjs.com/en/starter/basic-routing.html 

路由（Routing）是由一个 URI（或者叫路径标识）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

```shell
app.emthod(path,funcyion(){})
```

例如：

```javascript
//当以GET方式请求/的时候，执行对应的处理函数
app.get('/',function(req,res){
    res.send('这是我学习Node第八天');
})

//当以POST方式请求'/'时候，执行对应的函数
app.post('/',function(req,res){
    res.send('这是我学习Node第八天');
})

//以PUT方式去请求时候，执行对应的处理函数
app.put('/',function(req,res){
    console.log('马上快过年了');
})

//当以DELETE方式请求的时候，执行响应的处理函数
app.delete('/',function(){
    console.log('Hello WOrld!');
})
```

#### 怎么处理静态资源

```javascript
// 当以/public/开头的时候，去./public/目录中寻找对应的文件资源
//第一个参数是路由中以什么开头，第二个参数是要开放的资源文件路径
app.use('/public/,express('./public/'))

//省略了第一个参数，可以在URL省略/public来访问
app.use(express.static('./public/'))
```



