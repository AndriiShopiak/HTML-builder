import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { resolve, dirname, extname } from 'node:path';
import { createWriteStream } from 'node:fs';
import { readdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const bundleFilePath = resolve(__dirname, 'project-dist/bundle.css');
const stylesDirPath = resolve(__dirname, 'styles');

const stylesDirData = await readdir(stylesDirPath, { withFileTypes: true });
const cssFiles = stylesDirData.filter((item) => item.isFile() && extname(item.name) === '.css');

const ws = createWriteStream(bundleFilePath, 'utf-8');

for (const file of cssFiles) {
  const filePath = resolve(stylesDirPath, file.name);
  const fileData = await readFile(filePath, 'utf-8');

  ws.write(fileData + EOL);
}