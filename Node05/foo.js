var foo = 'Node';
var name = 'xiong';
var age = 18;
var fn = function(x, y) {
        return x + y;
    }
    //导出单个成员
    // module.exports.age = age;
    //导出多个成员
    // exports.age = age;
    // exports.name = name;
    // exports.foo = foo;

module.exports = {
    name: name,
    age: age,
    foo: foo,
    fn: fn
};