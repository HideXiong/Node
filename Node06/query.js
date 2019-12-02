//引入mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});
connection.connect(function(err) {
    if (!err) {
        console.log("连接成功");
    }
});

var sql = 'SELECT * FROM USER';
connection.query(sql, function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result);
    }
})
connection.end();