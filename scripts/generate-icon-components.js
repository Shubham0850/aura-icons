#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ✅ Path to the iconsData.json
const dataPath = path.resolve(__dirname, "../src/data/iconsData.json");
// ✅ Output folder for generated components
const outputDir = path.resolve(__dirname, "../icon-lib/icons");

// ✅ Create the folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// ✅ Load icons data
const icons = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// ✅ Utility: Convert to PascalCase and remove non-alphanumerics
const toPascalCase = (str) =>
  str
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase()) // kebab/snake to camel
    .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // spaces to camel
    .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter

// ✅ Utility: Fix SVG properties and make width, height, and stroke customizable
const fixSvgProps = (svgContent) => {
  return svgContent
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/clip-path/g, "clipPath")
    .replace(/width="[^"]+"/g, 'width="{props.width || 24}"') // Default to 24px if no width prop is passed
    .replace(/height="[^"]+"/g, 'height="{props.height || 24}"') // Default to 24px if no height prop is passed
    .replace(/stroke="[^"]+"/g, 'stroke={`${props.stroke || "black"}` }'); // Default to black if no stroke color is passed
};

// ✅ Generate React component file for each icon
icons.forEach((icon) => {
  const componentName = toPascalCase(icon.name.trim());

  // Fix the SVG properties
  const fixedSvg = fixSvgProps(icon.svg);

  const svgWithProps = fixedSvg.replace("<svg", "<svg {...props}");

  const componentCode = `import React from "react";

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (
  ${svgWithProps}
);

export default ${componentName};
`;

  const filePath = path.join(outputDir, `${componentName}.tsx`);
  fs.writeFileSync(filePath, componentCode, "utf-8");
});

console.log(`✅ ${icons.length} icon components generated in icon-lib/icons`);
