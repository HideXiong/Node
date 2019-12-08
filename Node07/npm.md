### npm
- 参考链接<https://docs.npmjs.com/getting-started/>
npm全称Node Package Manager,主要作用就是为了解决Node第三方包共享问题。

npm有两层含义。一层含义是Node的开房模式模块登记和管理系统，网址为[npmjs.org](http://npmjs.org/);
另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理模块。

npm不需要单独安装，在安装Node的时候，就一起安装了。

查看版本号：
`npm --version`
升级npm
`npm install npm --global`

### 常用命令
```
# 在项目中初始化一个package.json文件
# 凡是使用 npm 来管理的项目都会有这么一个文件
npm init
# 跳过向导，快速生成 package.json 文件
# 简写是 -y
npm init --y

#下载包
npm install 包名
npm i 包名

#安装多个包
npm install 包名 包名 包名

#安装指定的包版本号
npm install 包名@版本号

# npm list命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。
npm list

# 加上global参数，会列出全局安装的模块
npm list -global

# 更新本地安装的模块
# 它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装
npm update [package name]

# 升级全局安装的模块
npm update -global [package name]

# 卸载指定的包
npm uninstall 包名

# 查看包信息
# view 别名：v、info、show
npm view 包名

# 查看使用帮助
npm help

# 配置到淘宝服务器
npm config set registry https://registry.npm.taobao.org

# 查看 registry 是否配置正确
npm config get registry
```