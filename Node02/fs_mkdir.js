//引入fs模块
var fs = require('fs');
//要写入文件的信息
var str = {
        'name': 'xiong',
        'age': 18
    }
    //调用创建文件夹函数mkdir，在创建成功之后写入文件
fs.mkdir('info', function(err) {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('info/log.txt', JSON.stringify(str), function(error) {
            console.log(error);
        });
    }
});