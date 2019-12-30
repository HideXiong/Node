### git基本命令
----
#### git init
- 作用：初始化git仓库，需要使用git对某个项目进行管理，需要git int进行初始化。

```bash
# 初始化仓库，此时会在项目中生成一个隐藏文件夹.git
git init
```

####  git add
- 作用：将文件由 `工作区` 添加到 `暂存区`，在git中，文件无法直接从工作区直接添加到仓库区，必须先从工作区添加到暂存区，再从暂存区添加到仓库区。
- 命令：git add 文件名/目录名
```bash
# 添加index.html
git add index.html
# 添加所有文件
git add .
#将目录下的所有js文件添加
git add *.js
```
#### git commit 
- 作用：将文件由暂存区添加到仓库区，生成版本号
```bash
git commit -m'提交说明'

# 修改最近的一次提交说明， 如果提交说明不小心输错了，可以使用这个命令
git commit --amend -m'提交说明'
```
#### git config
```bash
# 第一次提交需要配置提交者的信息，需要初始化仓库
git config user.name 用户名
git config user.email 邮箱账号

# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可。推荐配置github的用户名和密码
git config --global user.name
git config --global user.email 

# 查看配置信息
git config --list
```
#### git status
- 作用：查看文件状态
- 红色表示工作区中的文件需要提交
- 绿色表示暂存区中的文件需要提交
- git status -s 简化状态输出格式
#### 分支
git branch 查看分支,在当前分支前面会有一个*
#### 创建分支
```bash
git branch 分支名字 
```
- 分支中的代码，在创建分支时，与当前分支代码完全一致
- git在第一次提交时，就有一个默认分支master
#### 切换分支
```bash
# 切换了分支，此时HEAD指针指向切换的分支
git checkout 分支名称
```
#### 切换并创建分支
```bash
# 切换并创建分支
git checkout -b 分支名称
```
#### 删除分支

```bash
git branch -d 分支名字
```
- master分支是不可以删除的

#### 拉取代码
```bash
# 初始化仓库
git init 

git config user.name 用户名
git config user.eamil 邮箱账号
git clone 仓库地址
```
#### git remote
- 给仓库地址设置别名
```bash
# 设置别名
git remote add 别名 仓库地址
#删除别名
git remote remove 别名
```
#### 提交流程
```bash
git add . 
git commit -m'提交说明'
git push 仓库地址  分支名字
```
