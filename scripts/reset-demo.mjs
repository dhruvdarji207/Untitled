import { rm, mkdir } from 'node:fs/promises';
import path from 'node:path';

const dataDir = path.resolve('data');
await rm(dataDir, { recursive: true, force: true });
await mkdir(dataDir, { recursive: true });
console.log('SecureLab demo data reset.');
