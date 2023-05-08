import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { resolve, dirname, extname } from 'node:path';
import { createWriteStream } from 'node:fs';
import { readdir } from 'node:fs/promises';