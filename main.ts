// honest-appliance-error-line
//
// v2: a microwave, owning up to its oldest trick. The fault is real
// (uneven heating: scorching plate, frozen centre), and the twist is
// the machine refusing to call it a fault at all — it is the design.
// Flat, put-upon, and honest: it heated the plate, not the food.
//
// The entry is written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) as exactly one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one honest error message from a microwave.
const ENTRY =
  "ERROR M1: I heated the plate, not the food. The centre is still frozen. That is not a fault. That is my design.";

// Gate self-check: 1-200 chars, a single non-blank line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the one line.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
