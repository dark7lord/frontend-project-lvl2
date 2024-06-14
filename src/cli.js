import { readFileSync } from 'fs';
import { program } from 'commander';
import { parseJsonFile } from './utils.js';
import genDiff from './genDiff.js';
// import { extname, resolve } from 'path';

export default function cli() {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .version('1.0.0')
    .action((filePath1, filePath2) => {
      try {
        const file1 = readFileSync(filePath1);
        const file2 = readFileSync(filePath2);

        const json1 = parseJsonFile(file1);
        const json2 = parseJsonFile(file2);

        const diff = genDiff(json1, json2);
        console.log(diff);
      } catch (error) {
        console.error('Error while reading file');
        console.error(error.message);
        process.exit(1);
      }
    });

  program.parse();
}
