const process = require('process');
const fs = require('fs');
const path = require('path');

const url = path.join(__dirname, 'text.txt');
fs.writeFile(url, '', () => { });
process.on('exit', () => {
  process.stdout.write('Wow, that\'s really cool, you\'re on your way, then good luck!');
  process.exit();
});
console.log('Hey, how did you get here friend? Well, tell me in the console...');
process.stdin.on('data', data => fs.appendFile(url, data, err => {
  if (err) throw err;
  if (data.toString().trim() === 'exit') process.exit();
}));
process.on('SIGINT', () => {
  process.exit();
});