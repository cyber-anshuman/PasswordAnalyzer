/**
 * PassAnalyzer Integrity & Code Quality Validator
 * Runs in CI and local environments to verify files, HTML structure,
 * and syntax validity of inline scripts.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Verify required files exist
const requiredFiles = [
  'index.html',
  'README.md',
  'LICENSE',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  '.gitignore'
];

console.log('Checking required repository files...');
for (const file of requiredFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}
console.log('All required repository files are present.\n');

// 2. Validate index.html structure
console.log('Validating index.html...');
const indexPath = path.join(rootDir, 'index.html');
const html = fs.readFileSync(indexPath, 'utf-8');

if (!html.includes('<!DOCTYPE html>') || !html.includes('</html>')) {
  console.error('index.html is missing standard DOCTYPE or closing HTML tag.');
  process.exit(1);
}

// 3. Extract and check syntax of inline scripts
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptCount = 0;

while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1].trim();
  if (code) {
    scriptCount++;
    try {
      new Function(code);
    } catch (err) {
      console.error(`Syntax error in inline <script> block #${scriptCount}:`, err.message);
      process.exit(1);
    }
  }
}

console.log(`Validated index.html: clean structure, ${scriptCount} inline script block(s) verified.\n`);
console.log('Repository validation passed successfully!');
