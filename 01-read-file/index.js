const fs = require('fs');
// add reading file and implemet auto code utf-8
let stream = new fs.ReadStream('01-read-file/text.txt', {encoding: 'utf-8'});
 
stream.on('readable', function(){
  let data = stream.read();
  console.log(data);
});
//  Use end when file reading ended
stream.on('end', function(){
  console.log('File processed successfully :)');
});
 