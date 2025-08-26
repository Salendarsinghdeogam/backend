const fs = require('fs');

fs.unlink("hi.txt", function (err) {
    if(err) console.error(err);
    else console.log("removed");
    
})