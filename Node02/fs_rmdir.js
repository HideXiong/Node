//引入核心模块
var fs = require('fs');
//创建文件夹，并且写入信息
fs.mkdir('image', function(error) {
    if (error) {
        console.log(error);
    } else {
        fs.readFile('../Node01/baby/timg.jpg', function(error, data) {
            if (!error) {
                console.log(data);
                fs.writeFile('image', data, function(error) {
                    if (error) {
                        console.log('哦豁失败了');
                    }
                })
            }
        });
    }
});