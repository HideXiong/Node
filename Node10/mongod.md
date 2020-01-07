#### 启动和关闭数据库
```
# mongodb 默认使用执行 mongodb命令所处盘符根目录下的/data/db作为数据存储目录
# 所以在第一次执行该命令之前需要自己手动创建一个/data/db
mongod
```

如果想要修改默认的数据存储目录，可以：

```shell
mongod --dbpath=数据存储目录路径
```

停止：

```shell
在总之太直接ctrl+c，或者直接关闭控制台
```

####  连接数据库

连接

```shell
#该命令默认连接本机的MongoDB服务
mongo
```

退出

```shell
# 在连接状态输入exit退出连接
exit
```

####  基本命令

- ```shell
  show dbs
  # 查看显示所有数据库
  ```

- ```shell
  use 数据库名称
  # 切换到指定的数据库（如果没有则创建）
  ```

- ```shell
  db
  # 查看当前操作的数据库
  ```

#### Node中使用MongoDB