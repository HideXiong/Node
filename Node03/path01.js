var fs = require('fs');
相对路径
fs.readFile('./path.js', function(err, data) {
    if (!err) {
        console.log(data);
    }
});

绝对路径, 当前文件所处的磁盘根目录
fs.readdir('/Node学习', function(err, data) {
    if (!err) {
        console.log(data.toString());
    }
});

fs.readFile('E:/Node学习/Node03/path.js', function(err, data) {
    if (!err) {
        console.log(data.toString());
    }
});