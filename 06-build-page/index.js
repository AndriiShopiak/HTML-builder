const path = require('path');
// const fs = require('fs');
// const { pipeline } = require('stream');
const fsPromises = require('fs').promises;

let mainProjectFolder = 'project-dist';

// Create folder for project

async function cerateDist() {
  const main = path.join(__dirname, mainProjectFolder);
  // const assetsFolder = path.join(__dirname, 'assets');
  // const desAssets = path.join(__dirname, 'assets');

  await fsPromises.mkdir(main, { recursive: true });
}
cerateDist();