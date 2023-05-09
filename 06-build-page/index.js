const path = require('path');
const fs = require('fs');
const { pipeline } = require('stream');
const template = path.join(__dirname, 'template.html');
const components = path.join(__dirname, 'components');
const sourceAssetsFolder = path.join(__dirname, 'assets');
const outputFolder = path.join(__dirname, 'project-dist');
const outputAssetsFolder = path.join(outputFolder, 'assets');
const sourceStyles = path.join(__dirname, 'styles');
const outputStyle = 'style.css';

// Copy dir function
async function copyDir (source, output) {
    try {
      await createFolder(output);
      const folderData = await readFolder(source);
      await copyFiles(folderData, source, output);
    } catch (e) {
      throw new Error(e);
    }
  };