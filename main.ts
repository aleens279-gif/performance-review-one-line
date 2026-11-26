// Funniest One-Line Performance Review — writes one line to /output/entry.txt
// Gate: 115 chars (max 140), one line, no trailing newline. Verified by running node main.ts.
// Twist: the agent reviews its human — great at making bugs, bad at reading errors.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Excels at creating bugs",
  "I heroically fix;",
  "must improve at reading",
  "my error messages before",
  "pasting them back to me.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
