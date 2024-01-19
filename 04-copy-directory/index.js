// import all required modules
const fsProm = require('fs/promises');
const path = require('path');

const fileSourcePath = path.join(__dirname, 'files');
const copyFilePath = path.join(__dirname, 'files-copy');

async function createCopyDir() {
  try {
    // remove the files-copy folder if it already exist
    await fsProm.rm(copyFilePath, {force: true, recursive: true});
    // create the files-copy folder if it does not exist yet
    await fsProm.mkdir(copyFilePath, { recursive: true });
    // get all files from files directory
    const getFiles = await fsProm.readdir(fileSourcePath, {withFileTypes: true}, (files)=> files);
    // copy get files to files-copy directory
    for (const file of getFiles) {
      fsProm.copyFile(path.join(fileSourcePath, file.name), path.join(copyFilePath, file.name));
    }
  }
  catch (error) {
    console.error(error);
  }
}
createCopyDir();