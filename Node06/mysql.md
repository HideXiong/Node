### Node连接数据库
npm istall mysql

```
//引入mysql模块
var mysql = require('mysql');
//创建数据库连接对象
var connection = mysql.creatConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    datebase: 'test',
    port: 3306//端口号可以省略，默认端口号是3306
})
connection.commect(function(err){

});
//sql语句
var sql = 'SELECT * FROM user';
//查
connection.query(sql,function(err,result){
    if(!err){
        console.log(result);
    }
});
//增
var addSql = 'INSERT INTO user(id,name,phoneNum) VALUES(?,?,?)';
var addParm = [1,'Node','5786333'];
connection.query(addSql,addParm,function(err,result){
    if(!err){
        console.log(result);
    }
})

//删
var delSql = 'DELETE FROM user where id = 1';
connection.query(delSql, function(err, result) {
    if (!err) {
        console.log('删除成功' + result);
    } else {
        console.log(err);
    }
});

var updateSql = 'UPDATE user SET name = "javaScript" where id = 1';
//改
connection.query(updateSql, function(err, result) {
    err ? console.log(err) : console.log(result);
});
//关闭连接
connection.end();
```