## 模块导出
导出多个成员（不推荐）
```
module.exports.age = 157;
module.exports.name = 'node';
module.exports.class = 'javaScript';
```
导出多个成员（推荐）
```
exports.age = 18;
exports.name = 'node';
exporst.class = 'javaScript';
exports.fn = function(){
    console.log('我是个函数');
}
```
导出多个成员
```
module.exports = {
    name: 'node',
    age: 18,
    class: 'javaScript'
}
```
导出单个成员（唯一写法）
```
//导出单个成员必须这写
module.exports = function(x,y){
    return x+y;
}
```
<p style="color:red">注意：单个成员只能导出一次，因为后面会覆盖前面的。</p>
### 为什么exports = xxxx不行?
exports是module的一个引用对象，这样相当于给exports重新赋值。
### expots和module.exports的区别
- exports和module.exports的区别
    - 每个模块中都有一个module对象
    - module对象中有一个exports对象
    - 我们把需要导出的成员挂载到module.exports接口对象中
    - 也就是：modeule.exports.xxx = xxx的方式
    - 但是这样做，太麻烦。Node为了简化，就在每个模块中提供了一个成员：exports
    - erports === module.expots
    - 所以对于module.exports.xxx = xxxx的时候，可以简化成exports.xxx = xxx
    - 不能使用exports = xxx
    - 因为每个模块最终向外return的是module.extorts
    - exports只是module.expots的一个引用
    - 即便你给exports重新赋值，也不会影响module.exports
    - 但是有一种关系比较特殊:exports = module.exports这个是用来建立exports引用关系的
### 特殊的导出方式
exports = module.exports = function(x,y){
    return x+y;
}