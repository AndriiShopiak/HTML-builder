const process = require('process');
const fs = require('fs');
fs.writeFile('02-write-file/text.txt', '', () => { });
process.on('exit', stopProcess);
process.stdin.on('data', data => fs.appendFile('02-write-file/text.txt', data, err => {
  if (err) throw err;
  if (data.toString().trim() === 'exit') process.exit();
}));
process.on('SIGINT', exitExecuting);
console.log('Hey, how did you get here friend? Well, tell me in the console...');

function stopProcess() {
  process.stdout.write('Wow, that\'s really cool, you\'re on your way, then good luck!');
  process.exit();
}
function exitExecuting() {
  process.exit();
}