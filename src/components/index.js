// Main exports for all components
export { Button, default as ButtonComponent } from './button/Button.js';
export { Input } from './input/Input.js';

// Re-export HTML files for projects that need them
export { default as buttonHTML } from './button/button.html?raw';
export { default as inputHTML } from './input/input.html?raw';

// Component registry for easy access
export const components = {
  Button: () => import('./button/Button.js'),
  Input: () => import('./input/Input.js'),
};

// Utility function to load all components
export async function loadAllComponents() {
  const { Button } = await import('./button/Button.js');
  const { Input } = await import('./input/Input.js');
  
  return { Button, Input };
}

