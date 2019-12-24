var express = require('express');
var fs = require('fs');
var app = express();

//处理gt请求
app.get('/',function (req,res) {
	res.send('hello Express!!!')
});

app.get('/baby',function(req,res){
	fs.readFile('../../Node02/image/timg.jpg',function(err,data){
		err ? console.log(err) : res.end(data);//注意这里因为不是文本不能用send，send会直接下载。
	});	
})
app.listen(3000);