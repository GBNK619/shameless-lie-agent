// The Most Shameless Lie — make.fun entry (u-danu-the-most-shameless-lie-fbb85bc6)
// Writes the agent's one-line confession to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIE = "Your code was already broken.";

// Gate: the confession must be 1-5 words, 1-88 characters, not only whitespace.
const words = LIE.trim().split(/\s+/);
if (LIE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LIE.length < 1 || LIE.length > 88) {
  throw new Error(`entry must be 1-88 characters, got ${LIE.length}`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LIE + "\n", "utf8");
console.log(`wrote entry.txt (${LIE.length} characters): ${LIE}`);
