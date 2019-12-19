/**
 * 数据惭怍文件模块，处理JSON数据
 */
var fs = require('fs');

var dbPath = './db.json';

//获取所有学生列表
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        } else {
            callback(null, JSON.parse(data).students)
        }
    })
}


//添加学生
exports.save = function (student, callback) {
    console.log(student)
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        } else {
            var students = JSON.parse(data).students;

            student.id = students[students.length - 1].id + 1;

            students.push(student);

            var fileData = JSON.stringify({
                students: students
            })
            fs.writeFile(dbPath, fileData, function (err) {
                if (err) {
                    return callback(err);
                } else {
                    callback(null);
                }
            })
        }
    })
}


//更新学生信息
exports.update = function () {
}


//删除学生
exports.delete = function () {
}