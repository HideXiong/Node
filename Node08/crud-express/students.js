/**
 * 数据操作文件模块，处理JSON数据
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
            if(students.length >0){
                 student.id = students[students.length - 1].id + 1;
            }else{
                 student.id = 0;
            }
           

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
exports.updateById= function (student,callback) {
    var stu = '';
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }else{
            var students = JSON.parse(data).students;
            for(var i = 0;i < students.length;i++){
               if(student.id == students[i].id){
                console.log('进来了');
                students[i] = student;
               }
            }
            var fileData = JSON.stringify({students:students});
            fs.writeFile(dbPath,fileData,function(err){
                if(err){

                }else{
                    callback(null);
                }
            })
        }
    })
}

//根据id查找学生信息
 exports.findById = function(id,callback){
    var res = '';
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }else{
            var students = JSON.parse(data).students;

            for(var i = 0;i < students.length;i++){
                if(students[i].id == id){
                    console.log(students[i]);
                     res = students[i];
                }
            }
            callback(null,res);
        }
    })
 }

//删除学生
exports.deleteById = function (id,callback) {
    var res = 0;
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;
        for(var i = 0;i < students.length;i++){
            console.log(students[i]);
            if(students[i].id == id){
                res = i;
            }
        }
        students.splice(res,1);
         var fileData = JSON.stringify({students:students});
            fs.writeFile(dbPath,fileData,function(err){
                if(err){
                    return status(500).send('服务器繁忙');
                }else{
                    callback(null);
                }
            })
    })
}



