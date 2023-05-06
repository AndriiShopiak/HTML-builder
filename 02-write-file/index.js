const process = require('process');
const fs = require('fs');
const path = require('path');
// const { stdin, stdout } = process;
// const url = path.join(__dirname, 'text.txt');

// fs.writeFile(url, '', (err) => {
//   if (err) throw err;
//   console.log('Хай, как ты сюда забрёл друг? Ну-ка расскажи мне в консоли...');
// });

// process.on('exit', () => {
//   stdout.write('Да? Очень интересно, ладно, всё удачи, мне пора!');
//   process.exit();
// });

// stdin.on('data', data => fs.appendFile(url, data, err => {
//   if (err) throw err;
//   if (data.toString().trim() === 'exit') process.exit();
// }));

// process.on('SIGINT', () => {
//   console.log('');
//   process.exit()
// });
const url = path.join(__dirname, 'text.txt');
process.on("exit" , () => {
  process.stdout.write("Wow, that's really cool, you're on your way, then good luck!");
  process.exit();
});
console.log("Hey, how did you get here friend? Well, tell me in the console...");
process.stdin.on('data', data => fs.appendFile(url, data, err => {
    if (err) throw err;
    if (data.toString().trim() === 'exit') process.exit();
  }));
process.on("SIGINT", () => {
  process.exit();
});