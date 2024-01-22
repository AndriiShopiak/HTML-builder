// Import all required modules
const path = require('path');
const fs = require('fs');

const pathWritingFiles = path.join(__dirname, 'project-dist', 'bundle.css');

const outputFile = fs.createWriteStream(pathWritingFiles);

async function mergeBundle () {
  const files = await fs.promises.readdir(path.join(__dirname, 'styles'), {
    withFileTypes: true,
  });

  for (const file of files) {
    const filePath = path.join(__dirname, 'styles', file.name);
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.createReadStream(filePath).pipe(outputFile);
    }
  }
}

mergeBundle();