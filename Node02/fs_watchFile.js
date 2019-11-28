var fs = require('fs');
fs.watchFile('./info/log.txt', function(eventType, fileName) {
    console.log(fileName);
})