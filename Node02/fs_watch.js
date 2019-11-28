var fs = require('fs');
fs.watch('./info/log.txt', function(eventType, hh) {
    console.log(`event type is:` + eventType);
    console.log(hh);
})