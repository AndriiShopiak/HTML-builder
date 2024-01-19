const { stdout } = process;
const path = require('path');
const { readdir, stat } = require('fs/promises');

const directory = path.join(__dirname, 'secret-folder');


async function readFileDir (directoryPath) {
  try {
    const files = await readdir(directoryPath, { withFileTypes: true });
    let counter = 0;

    while (counter < files.length) {
      if (files[counter].isFile()) {
        const fileName = path.basename(files[counter].name, path.extname(files[counter].name));
        const fileExtname = path.extname(files[counter].name).slice(1);
        const stats = await stat(path.join(directoryPath, files[counter].name));
        const fileSize = parseFloat((stats.size / Math.pow(1024, 1)).toFixed(2));
        stdout.write(`\n${fileName} - ${fileExtname} - ${fileSize}kb`);
      }
      counter++;
    }
    
  } catch (err) {
    console.error(err);
  }
}
readFileDir(directory);