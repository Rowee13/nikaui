import { Command } from "commander";
import chalk from "chalk";
import ora from "ora";

export const addCommand = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("<components...>", "Components to add")
  .option("--pro", "Add a pro component (requires license key)")
  .option("--overwrite", "Overwrite existing components")
  .action(async (components: string[], options) => {
    const spinner = ora(`Adding ${components.join(", ")}...`).start();

    try {
      for (const component of components) {
        if (options.pro) {
          spinner.text = `Adding pro component: ${component}...`;
          // TODO: Validate license key and fetch pro component
          console.log(
            chalk.yellow(`\n  Pro components coming soon: ${component}`)
          );
        } else {
          spinner.text = `Adding ${component}...`;
          // TODO: Fetch from registry and copy to project
          console.log(chalk.green(`\n  Added: ${component}`));
        }
      }

      spinner.succeed(chalk.green("Components added successfully!"));
    } catch (error) {
      spinner.fail(chalk.red("Failed to add components"));
      console.error(error);
      process.exit(1);
    }
  });
