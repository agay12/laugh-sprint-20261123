import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "My smoke alarm is the only kitchen timer that works \u2014 dinner's ready exactly when the neighbors start yelling.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + " (" + ENTRY_TEXT.length + " chars)");
