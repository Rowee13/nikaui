import { Command } from "commander";
import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import prompts from "prompts";

export const initCommand = new Command()
  .name("init")
  .description("Initialize Nika UI in your project")
  .action(async () => {
    console.log(chalk.bold("\n  Welcome to Nika UI\n"));

    const response = await prompts([
      {
        type: "text",
        name: "componentsDir",
        message: "Where should components be installed?",
        initial: "src/components/ui",
      },
      {
        type: "text",
        name: "utilsDir",
        message: "Where should utilities be installed?",
        initial: "src/lib",
      },
      {
        type: "confirm",
        name: "motion",
        message: "Enable motion animations?",
        initial: true,
      },
    ]);

    const spinner = ora("Initializing Nika UI...").start();

    try {
      await fs.ensureDir(response.componentsDir);
      await fs.ensureDir(response.utilsDir);

      const config = `export default {
  style: "default",
  tailwind: {
    css: "./src/app/globals.css",
  },
  aliases: {
    components: "@/components",
    ui: "@/components/ui",
    utils: "@/lib/utils",
    hooks: "@/hooks",
  },
  motion: ${response.motion},
} as const;
`;
      await fs.writeFile("nika.config.ts", config);

      const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
      await fs.writeFile(
        path.join(response.utilsDir, "utils.ts"),
        utilsContent
      );

      if (response.motion) {
        const motionContent = `export const motionPresets = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  slideDown: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
  scaleIn: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  tap: { whileTap: { scale: 0.98 } },
  hover: { whileHover: { scale: 1.02 } },
  spring: { type: "spring" as const, stiffness: 400, damping: 17 },
  springBouncy: { type: "spring" as const, stiffness: 600, damping: 15 },
  springSmooth: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const;
`;
        await fs.writeFile(
          path.join(response.utilsDir, "motion.ts"),
          motionContent
        );
      }

      spinner.succeed(chalk.green("Nika UI initialized successfully!"));
      console.log(
        chalk.dim("\n  You can now add components with:"),
        chalk.cyan("npx nika add button\n")
      );
    } catch (error) {
      spinner.fail(chalk.red("Failed to initialize Nika UI"));
      console.error(error);
      process.exit(1);
    }
  });
