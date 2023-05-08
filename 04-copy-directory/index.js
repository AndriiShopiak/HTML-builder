const path = require('path');
const fs = require('fs');

const srcFolder = path.join(__dirname, 'files');
const outputFolder = path.join(__dirname, 'files-copy');

async function copyDir (source, output) {
    try {
      await deleteFolder(output);
    } catch {
      console.log('Creating "files-copy" folder');
    } finally {
      await createFolder(output);
      const srcData = await readFolder(source);
      await copyFiles(srcData, source, output);
    }
  };
  
 async function deleteFolder (folder) {
    await fs.promises.rm(folder, { recursive: true });
  };
  
 async function createFolder (folder) {
    fs.promises.mkdir(folder, { recursive: true });
  };
  
 async function readFolder (folder) {
    const allFilesNames = await fs.promises.readdir(folder, {
      withFileTypes: true,
    });
  
    return allFilesNames;
  };
  
 async function copyFiles (allFilesNames, srcFolder, outputFolder) {
    for (let file of allFilesNames) {
      const srcFile = path.join(srcFolder, file.name);
      const outputFile = path.join(outputFolder, file.name);
      if (file.isFile()) {
        fs.promises.copyFile(srcFile, outputFile);
      } else {
        await copyDir(srcFile, outputFile);
      }
    }
  };
  
  copyDir(srcFolder, outputFolder);