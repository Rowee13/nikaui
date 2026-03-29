import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

/**
 * Detect which package manager is being used in the project.
 */
export function detectPackageManager(cwd: string): PackageManager {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  return "npm";
}

/**
 * Check which dependencies from the list are not yet installed.
 */
export async function getMissingDependencies(
  cwd: string,
  deps: string[]
): Promise<string[]> {
  if (deps.length === 0) return [];

  const pkgPath = path.join(cwd, "package.json");
  if (!(await fs.pathExists(pkgPath))) return deps;

  const pkg = await fs.readJson(pkgPath);
  const installed = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  return deps.filter((dep) => !installed[dep]);
}

/**
 * Install npm dependencies using the detected package manager.
 */
export function installDependencies(
  cwd: string,
  deps: string[]
): void {
  if (deps.length === 0) return;

  const pm = detectPackageManager(cwd);
  const depsStr = deps.join(" ");

  const commands: Record<PackageManager, string> = {
    pnpm: `pnpm add ${depsStr}`,
    npm: `npm install ${depsStr}`,
    yarn: `yarn add ${depsStr}`,
    bun: `bun add ${depsStr}`,
  };

  execSync(commands[pm], { cwd, stdio: "pipe" });
}
