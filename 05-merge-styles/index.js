// Import all required modules
const path = require('path');
const fs = require('fs');
// Define path for files
const desFolder = 'styles';
const exitFolder = 'project-dist';
const FileName = 'bundle.css';
const pathWritingFiles = path.join(__dirname, exitFolder, FileName);

const outputFile = fs.createWriteStream(pathWritingFiles);

async function buildBundle () {
  const files = await fs.promises.readdir(path.join(__dirname, desFolder), {
    withFileTypes: true,
  });

  for await (const file of files) {
    const filePath = path.join(__dirname, desFolder, file.name);
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.createReadStream(filePath).pipe(outputFile);
    }
  }
}

buildBundle();