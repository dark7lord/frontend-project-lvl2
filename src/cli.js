import { program } from "commander";

export default function cli() {
  program
    .name("gendiff")
    .description("Compares two configuration files and shows a difference.")
    .argument("<filepath1>")
    .argument("<filepath2>")
    .option("-f, --format [type]", "output format")
    .version("1.0.0");

  program.parse();

  // const filePath1 = program.args[0];
  // const filePath2 = program.args[1];
  // const options = program.opts();

  // console.log(`Console: format - {${options.format}}  ${filePath1} ${filePath2});`);
}
