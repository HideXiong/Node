//加载path核心模块
var path = require('path');
console.log(path.basename('../Node02/info/log.txt'));
console.log(path.dirname('../Node02/info/log.txt'));
console.log(path.extname('../Node02/info/log.txt'));
var obj = path.parse('../Node02/info/log.txt');
console.log(obj);
var url = path.format(obj);
console.log(path.format({
    root: '/ignored',
    dir: '/user/helpCenter',
    base: '/file.js'
}));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.isAbsolute('./info'));
console.log(path.isAbsolute('/info'));