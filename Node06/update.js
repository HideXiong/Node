//加载mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect(function(err) {
    if (err) {
        console.log('对不起，连接失败');
    } else {
        console.log('连接成功');
    }
});
//要执行的sql语句
var updateSql = 'UPDATE user SET name = "javaScript" where id = 1';
//改
connection.query(updateSql, function(err, result) {
    err ? console.log(err) : console.log(result);
});