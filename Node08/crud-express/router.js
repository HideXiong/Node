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
    Students.save(req.body,function(err){
        if(err){
            res.status(500).send('服务器繁忙');
        }else{
             res.redirect('/students');
        }
    })
})

//渲染编辑信息到页面
router.get('/students/edit', function(req, res) {
   Students.findById(parseInt(req.query.id),function(err,student){
        if(err){
            return res.status(500).send('服务器繁忙');
        }else{
           res.render('edit.html',{
            student: student
           })
        }
   })
})


//编辑提交
router.post('/students/edit', function(req, res) {
    Students.updateById(req.body,function(err){
        if(err){
            return status(500).send('服务器繁忙');
        }
         res.redirect('/students');
    })
})

//删除
router.get('/students/delete', function(req, res) {
    
    Students.deleteById(req.query.id,function(err){
         if(err){
            return status(500).send('服务器繁忙');
        }
         res.redirect('/students');
    })
})

//导出router

module.exports = router;



