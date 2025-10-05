#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Ensure dist directory exists
const distDir = path.join(projectRoot, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Components to build
const components = [
  'button',
  'card', 
  'input',
  'badge',
  'modal'
];

// Copy component files to dist
components.forEach(component => {
  const srcDir = path.join(projectRoot, 'src', 'components', component);
  const distComponentDir = path.join(distDir, component);
  
  // Create component directory in dist
  if (!fs.existsSync(distComponentDir)) {
    fs.mkdirSync(distComponentDir, { recursive: true });
  }
  
  // Copy JS file
  const jsFile = path.join(srcDir, `${component.charAt(0).toUpperCase() + component.slice(1)}.js`);
  const distJsFile = path.join(distComponentDir, `${component}.js`);
  if (fs.existsSync(jsFile)) {
    fs.copyFileSync(jsFile, distJsFile);
    console.log(`✓ Copied ${component}.js`);
  }
  
  // Copy CSS file
  const cssFile = path.join(srcDir, `${component.charAt(0).toUpperCase() + component.slice(1)}.css`);
  const distCssFile = path.join(distComponentDir, `${component}.css`);
  if (fs.existsSync(cssFile)) {
    fs.copyFileSync(cssFile, distCssFile);
    console.log(`✓ Copied ${component}.css`);
  }
  
  // Copy README file
  const readmeFile = path.join(srcDir, 'README.md');
  const distReadmeFile = path.join(distComponentDir, 'README.md');
  if (fs.existsSync(readmeFile)) {
    fs.copyFileSync(readmeFile, distReadmeFile);
    console.log(`✓ Copied ${component} README.md`);
  }
});

// Copy design tokens and reset styles
const stylesDir = path.join(projectRoot, 'src', 'styles');
const distStylesDir = path.join(distDir, 'styles');

if (!fs.existsSync(distStylesDir)) {
  fs.mkdirSync(distStylesDir, { recursive: true });
}

// Copy tokens.css
const tokensFile = path.join(stylesDir, 'tokens.css');
const distTokensFile = path.join(distStylesDir, 'tokens.css');
if (fs.existsSync(tokensFile)) {
  fs.copyFileSync(tokensFile, distTokensFile);
  console.log('✓ Copied tokens.css');
}

// Copy reset.css
const resetFile = path.join(stylesDir, 'reset.css');
const distResetFile = path.join(distStylesDir, 'reset.css');
if (fs.existsSync(resetFile)) {
  fs.copyFileSync(resetFile, distResetFile);
  console.log('✓ Copied reset.css');
}

// Create index files for easy imports
const indexJsContent = `// Web Components Library - Main Entry Point
export { Button } from './button/button.js';
export { Card } from './card/card.js';
export { Input } from './input/input.js';
export { Badge } from './badge/badge.js';
export { Modal } from './modal/modal.js';
`;

const indexCssContent = `/* Web Components Library - Main Styles */
@import url('./styles/tokens.css');
@import url('./styles/reset.css');
@import url('./button/button.css');
@import url('./card/card.css');
@import url('./input/input.css');
@import url('./badge/badge.css');
@import url('./modal/modal.css');
`;

// Write index files
fs.writeFileSync(path.join(distDir, 'index.js'), indexJsContent);
fs.writeFileSync(path.join(distDir, 'index.css'), indexCssContent);

console.log('✓ Created index.js and index.css');

// Create package.json for dist
const packageJson = {
  name: '@yourusername/web-components',
  version: '0.1.0',
  description: 'A standalone web components library with Storybook documentation',
  type: 'module',
  main: 'index.js',
  files: ['**/*'],
  keywords: ['web-components', 'vanilla-js', 'storybook', 'ui-library'],
  author: '',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/yourusername/web-components.git'
  },
  homepage: 'https://yourusername.github.io/web-components',
  bugs: {
    url: 'https://github.com/yourusername/web-components/issues'
  }
};

fs.writeFileSync(
  path.join(distDir, 'package.json'), 
  JSON.stringify(packageJson, null, 2)
);

console.log('✓ Created package.json for dist');

// Create CDN usage examples
const cdnExamples = `# CDN Usage Examples

## Individual Components

### Button
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.css">
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.js';
  
  const button = new Button({ label: 'Click me', variant: 'primary' });
  document.body.appendChild(button.render());
</script>
\`\`\`

### Card
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/card/card.css">
<script type="module">
  import { Card } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/card/card.js';
  
  const card = new Card({ 
    title: 'Card Title',
    content: 'Card content',
    variant: 'default'
  });
  document.body.appendChild(card.render());
</script>
\`\`\`

## All Components
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.css">
<script type="module">
  import { Button, Card, Input, Badge, Modal } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.js';
  
  // Use any component
  const button = new Button({ label: 'Click me' });
  const card = new Card({ title: 'Title', content: 'Content' });
</script>
\`\`\`
`;

fs.writeFileSync(path.join(distDir, 'CDN-EXAMPLES.md'), cdnExamples);

console.log('✓ Created CDN usage examples');

console.log('\n🎉 Build completed successfully!');
console.log('📁 Distribution files are available in the dist/ directory');
console.log('🌐 Components can be imported via CDN from jsDelivr');
