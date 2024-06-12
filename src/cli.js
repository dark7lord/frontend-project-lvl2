import { program } from "commander";
import { readFileSync } from "fs";
import { parseJsonFile } from "./utils.js";
// import { extname, resolve } from "path";

export default function cli() {
  program
    .name("gendiff")
    .description("Compares two configuration files and shows a difference.")
    .argument("<filepath1>")
    .argument("<filepath2>")
    .option("-f, --format [type]", "output format")
    .version("1.0.0")
    .action((filePath1, filePath2) => {
      // const extname1 = extname( resolve(filePath1) ).slice(1);
      // const extname2 = extname( resolve(filePath2) ).slice(1);
      // console.log(extname1, extname2);
    
      try {
        const file1 = readFileSync(filePath1);
        const file2 = readFileSync(filePath2);
        
        const json1 = parseJsonFile(file1);
        const json2 = parseJsonFile(file2);
        console.log(json1, json2);
      } catch (error) {
        console.error('Error while reading file');
        console.error(error.message);
        process.exit(1);
      }

    })

  program.parse();

  // const [ filePath1, filePath2 ] = program.args;

  // const options = program.opts();

  // console.log(`Console: format - {${options.format}}  ${filePath1} ${filePath2});`);
}
