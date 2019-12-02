//加载mysql
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
});
connection.connect(function(err) {
    if (err) {
        console.log('对不起，连接出错');
    } else {
        console.log('连接成功');
    }
});
//要执行的sql
var delSql = 'DELETE FROM user where id = 2';
connection.query(delSql, function(err, result) {
    if (!err) {
        console.log('删除成功' + result);
    } else {
        console.log(err);
    }
});

connection.end();