const path = require('path');
const fs = require('fs');

const srcFolder = 'styles';
const outputFolder = 'project-dist';
const fileName = 'bundle.css';

const outputFile = fs.createWriteStream(
  path.join(__dirname, outputFolder, fileName)
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