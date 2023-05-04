const fs = require('fs');
 let stream = fs.readFileSync("01-read-file/text.txt", "utf-8");
 console.log(stream);
 