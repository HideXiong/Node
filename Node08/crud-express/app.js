var express = require('express'); //加载express

var router = require('./router'); //加载router模块

var app = express();

app.use('/node_modules/', express.static('./node_modules/'));

app.use('/public/', express.static('./public/'));

app.engine('html', require('express-art-template'));

app.use(router);

app.listen(3000, function() {
    console.log('running 3000');
});