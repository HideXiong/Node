## path模块
path模块也是Node的核心模块，它的作用就是专门处理路径问题。
```
path.basename();//获取路径的文件名部分
path.basename('../Node02/info/log.txt');
path.extname();//获取路径后缀名
path.exname('../Node02/info/log.txt');
path.dirname();//获取路径目录部分
path.dirname('../Node02/info/log.txt');
path.parse();//把路径转换成对象，得到路径的各个部分
path.parse('../Node02/info/log.txt');
path.fotmart();//将一个对象转成路径
path.formart({
    root: '../Node',
    name: '/log',
    ext: '.jpg'
});
path.join();//多个路径拼接成一个路径
path.join('../', 'info', 'log.txt');
path.isAbsolute('//image');//判断一个路径是否是绝对路径
```
## 路径分类
和大多数语言一样，Node也遵循以下规则
- 绝对路径
  - 以/开头的路径，例如 /Node02/info/log.txt
  - 以盘符开头的路径,例如 E:/Node02/info/log.txt
- 相对路径 
    - 以 ./开头的路径，例如 ./Node03/info/log.txt
      - 在这里 ./可以省略。但是不能只省略.
    - 以../开头的路径，例如：../a/b/c
```
//相对于当前的路径
``` 