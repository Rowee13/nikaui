import type { NikaConfig } from "./config.js";

/**
 * Transform component source code to use the user's configured aliases.
 *
 * Registry components use relative imports like `../lib/utils`.
 * This rewrites them to the user's alias paths like `@/lib/utils`.
 */
export function transformImports(
  content: string,
  config: NikaConfig
): string {
  let result = content;

  // Replace relative utils import → user's utils alias
  // e.g. "../lib/utils" → "@/lib/utils"
  result = result.replace(
    /from\s+["']\.\.\/lib\/utils["']/g,
    `from "${config.aliases.utils}"`
  );

  // Replace relative motion import → user's utils dir + /motion
  // e.g. "../lib/motion" → "@/lib/motion"
  const motionAlias = config.aliases.utils.replace(/\/utils$/, "/motion");
  result = result.replace(
    /from\s+["']\.\.\/lib\/motion["']/g,
    `from "${motionAlias}"`
  );

  return result;
}
