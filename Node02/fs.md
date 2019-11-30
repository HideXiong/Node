## 同步和异步
Node中fs模块对文件操作几乎所有的都有同步和异步的两种形式。例如readFile();readFileSync();
同步和异步操作文件的区别
- 同步调用立即执行，但是会阻塞后续代码继续执行。
- 异步调用不会阻塞后续代码的执行，需要一个回调函数作为额外的参数，Node中通常包含一个错误作为回调函数的第一个参数。
- Node中通常用回调函数第一个参数error判断异常，然后对异常处理。
## 同步和异步有什么区别
- 同步会阻塞后续代码的执行，效率低
- 异步相当于多个人帮你干活，效率高
## 常用API
```
fs.access(path,callback);判断路径是否存在
fs.access('./info/log.txt',function(err){
    err ? console.log('不存在') : console.log('存在');
})

fs.appendFile(file,data,callback);向文件中增加内容,如果文件不存在，则创建文件
fs.appendFile('./info/log.txt','这是要添加的内容',function(err){
    if(!err){
        fs.readFile('./info/log.txt',function(err,data){
            if(!err){
                console.log(data);
            }
        })
    }
})

fs.stat(path,callback);获取文件的状态
fs.stat('./info/log.txt',function(err,data){
    if(!err){
        console.log(data);
    }
});


fs.copyFile(oldsrc,newsrc,callback);复制文件
//注意：低版本不支持该函数，此外如果目标文件夹已经有了你要复制的名字，Node会覆盖它
fs.copyFile('./info/log.txt','./info/userlog.txt/',function(err){
    if(!err){
        console.log('复制成功');
    }
})

fs.mkdir(path,callback);创建目录，只能删除空目录
fs.mkdir('./info',function(err){
    if(!err){
    console.log('创建文件夹成功');
    }
})

fs.rmdir(path,callback);//删除文件
fs.rmdir('./info',function(err){
    if(!err){
        consolelog('删除成功');
    }
})

fs.readdir(path,callback);//读取目录列表
fs.readdir('../Node01',function(err,data){
    if(!err){
        console.log(data);
    }
})

fs.rename(oldPath,newPath,callback);重命名文件
//在源文件中，文件名是不区分大小写的
fs.reanme('./image/杨颖.jpg','./image/baby.jpg'function(err){
    if(!err){
        console.log('重命名成功');
    }
})

fs.unlink(path,callback);删除文件
fs.unlink('./image/timg.jpg',function(err){
    if(!err){
        console.log('删除成功');
    }
})

fs.watch('path',callback);//监视文件
fs.watch('./info/log.txt',function(eventType,filename){
    console.log(eventType);
    console.log(filename);
});

fs.watchFile(path,callback);//监视文件，能获取到文件的状态
fs.watchFile('./info/log.txt', function(eventType, fileName) {
    console.log(eventType);
})
```