var fs = require('fs');
var Students = require('./students');
//加载expree模块
var express = require('express');

//创建路由容器

var router = express.Router();

//把路由都放到router容器中

router.get('/students', function(req, res) {
    Students.find(function(err, students) {
        if (err) {
            return res.status(500).send('服务器繁忙');
        } else {
            res.render('index.html', {
                fruits: [
                    '一班',
                    '二班',
                    '三班',
                    '四班'
                ],
                students: students
            });
        }
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html');
})

router.post('/students/new', function(req, res) {
    //获取表单数据
    //处理
    //发送响应

})

router.get('/students/edit', function(req, res) {

})

router.post('/students/edit', function(req, res) {

})

router.get('/students/delete', function(req, res) {

})

//导出router

module.exports = router;