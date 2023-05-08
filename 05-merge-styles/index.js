const path = require('path');
const fs = require('fs');

const srcFolder = 'styles';
const exitFolder = 'project-dist';
const FileName = 'bundle.css';

const outputFile = fs.createWriteStream(
  path.join(__dirname, exitFolder, FileName)
);

async function buildBundle () {
  const files = await fs.promises.readdir(path.join(__dirname, srcFolder), {
    withFileTypes: true,
  });

  for await (const file of files) {
    const filePath = path.join(__dirname, srcFolder, file.name);
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.createReadStream(filePath).pipe(outputFile);
    }
  }
};

buildBundle();