#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const iconsDir = path.join(__dirname, '../public/icons');
const outputPath = path.join(__dirname, '../src/data/iconsData.json');

const iconsData = [];

/**
 * Recursively read a directory and process svg files.
 */
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // The directory name acts as a category
      const category = entry.name;
      const categoryEntries = fs.readdirSync(fullPath, { withFileTypes: true });

      // Iterate through files in the category directory
      for (const catEntry of categoryEntries) {
        if (catEntry.isFile() && catEntry.name.endsWith('.svg')) {
          const svgPath = path.join(fullPath, catEntry.name);
          const svgContent = fs.readFileSync(svgPath, 'utf-8').trim();
          const iconName = path.basename(catEntry.name, '.svg');

          iconsData.push({
            name: iconName,
            svg: svgContent,
            category: category,
          });
        }
      }
    }
  }
}

// Execute the directory reading
processDirectory(iconsDir);

// Write the output file
fs.writeFileSync(outputPath, JSON.stringify(iconsData, null, 2));
console.log(`iconsData.json created successfully with ${iconsData.length} icons.`);
