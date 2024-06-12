import { program } from "commander";

export default function cli() {
  program
    .name("gendiff")
    // .description("Compares two configuration files and shows a difference.")
    // .option("-f, --format <type>", "output format")
    .option("-h, --help", "Compares two configuration files and shows a difference.")
    .version("1.0.0");

  program.parse();

  if (program.help) {
    program.outputHelp();
  }
}
