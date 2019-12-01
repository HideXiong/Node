// 引入用户自定义模块
var foo = require('./foo');

//引入第三方模块
var mysql = require('mysql');
var sql = 'SELECT * FROM USER';
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('创建成功');
    }
});
connection.query(sql, function(err, result, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
//引入Node的核心模块
var fs = require('fs');
fs.readFile('./foo.js', function(err, data) {
    if (!err) {
        console.log(data.toString());
    }
});