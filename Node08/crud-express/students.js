/**
 * 数据惭怍文件模块，处理JSON数据
 */
var fs = require('fs');

var dbPath = './db.json';

//获取所有学生列表
exports.find = function() {
    fs.readFile(dbPath, function(err, data) {

    })
}



//添加学生
exports.save = function() {}


//更新学生信息
exports.update = function() {}


//删除学生
exports.delete = function() {}