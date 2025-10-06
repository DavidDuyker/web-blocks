// Main exports for all components
export { Button, default as ButtonComponent } from './button/Button.js';
export { Input } from './input/Input.js';
export { Link } from './link/Link.js';

// Re-export HTML files for projects that need them
export { default as buttonHTML } from './button/button.html?raw';
export { default as inputHTML } from './input/input.html?raw';
export { default as linkHTML } from './link/link.html?raw';

// Component registry for easy access
export const components = {
  Button: () => import('./button/Button.js'),
  Input: () => import('./input/Input.js'),
  Link: () => import('./link/Link.js'),
};

// Utility function to load all components
export async function loadAllComponents() {
  const { Button } = await import('./button/Button.js');
  const { Input } = await import('./input/Input.js');
  const { Link } = await import('./link/Link.js');
  
  return { Button, Input, Link };
}

