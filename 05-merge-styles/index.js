const path = require('path');
const fs = require('fs');

const sourceFolder = 'styles';
const outputFolder = 'project-dist';
const fileName = 'bundle.css';

const outputFile = fs.createWriteStream(
  path.join(__dirname, outputFolder, fileName)
);

const buildBundle = async () => {
  const files = await fs.promises.readdir(path.join(__dirname, sourceFolder), {
    withFileTypes: true,
  });

  for await (const file of files) {
    const filePath = path.join(__dirname, sourceFolder, file.name);
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.createReadStream(filePath).pipe(outputFile);
    }
  }
};

buildBundle();