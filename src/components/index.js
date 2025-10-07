// Main exports for all standalone components
// These components work both as standalone scripts and ES modules

// Import components to register them as web components

import './link/Link.js';

// Export the classes for ES module usage

export { Link } from './link/Link.js';

// For vanilla HTML usage, the components are automatically available globally:
// - window.Button
// - window.Input  
// - window.Link
// - <wc-button>
// - <wc-input>
// - <wc-link>

// Component registry for easy access
export const components = {
  Link: () => import('./link/Link.js'),
};

// Utility function to load all components
export async function loadAllComponents() {
  const { Link } = await import('./link/Link.js');
  
  return { Link };
}

