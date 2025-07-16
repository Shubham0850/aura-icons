#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ✅ Where icon components are located
const iconsDir = path.resolve(__dirname, "../icon-lib/icons");
// ✅ Where index.ts should be created
const outputPath = path.resolve(__dirname, "../icon-lib/src/index.ts");

// ✅ Convert to valid PascalCase variable (no spaces, no special chars)
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]/g, " ") // Replace special chars with space
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase()) // Uppercase after spaces
    .replace(/^(.)/, (_, c) => c.toUpperCase()) // Capitalize first
    .replace(/\s/g, ""); // Remove spaces

// ✅ Read icon files
const files = fs.readdirSync(iconsDir).filter((file) => file.endsWith(".tsx"));

// ✅ Create export lines
const exportLines = files.map((file) => {
  const baseName = path.basename(file, ".tsx");
  const exportName = toPascalCase(baseName);
  return `export { default as ${exportName} } from "../icons/${baseName}";`;
});

// ✅ Write to index.ts
fs.writeFileSync(outputPath, exportLines.join("\n") + "\n", "utf-8");

console.log(
  `✅ Successfully created index.ts with ${files.length} exports in src/`,
);
