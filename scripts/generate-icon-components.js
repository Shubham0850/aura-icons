#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Paths
const dataPath = path.resolve(__dirname, "../src/data/iconsData.json");
const outputDir = path.resolve(__dirname, "../icon-lib/icons");

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Load icons data
const icons = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// Convert name to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[^\w\s]/g, "")
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/\s+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());

// Convert SVG attributes to camelCase
function fixSvgAttributes(svg) {
  return svg
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/clip-path/g, "clipPath")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule");
}

// Generate each component
icons.forEach((icon) => {
  const componentName = toPascalCase(icon.name.trim());
  const fixedSvg = fixSvgAttributes(icon.svg).replace(
    "<svg",
    "<svg {...props}", // this allows customization of props
  );

  const componentCode = `import React from "react";

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (
  ${fixedSvg}
);

export default ${componentName};
`;

  const filePath = path.join(outputDir, `${componentName}.tsx`);
  fs.writeFileSync(filePath, componentCode, "utf-8");
});

console.log(`✅ ${icons.length} icon components generated in icon-lib/icons`);
