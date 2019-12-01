//引入mysql模块
var mysql = require('mysql');
//创建连接对象
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
})
connection.connect();
//执行sql
var addSql = 'INSERT INTO USER(id,name,phoneNum) VALUES(?,?,?)';
var addParm = [5, 'Node', 5786333];
connection.query(addSql, addParm, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})