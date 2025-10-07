import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

// Create a custom theme
const customTheme = create({
  base: 'dark', // or 'dark'

  // Brand
  brandTitle: '🛠️ Web Blocks',
  brandTarget: '_self',

  // UI
  appBorderColor: '#000000',
  appBorderRadius: 16,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#2E3438',
  textMutedColor: '#798186',

  // Toolbar default and active colors
  barTextColor: '#798186',
  barSelectedColor: '#1EA7FD',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E1E8ED',
  inputTextColor: '#2E3438',
  inputBorderRadius: 4,
});

// Configure Storybook manager
addons.setConfig({
  theme: customTheme,
  
  // Panel position
  panelPosition: 'right', // or 'right'
  
  // Show/hide panels
  showPanel: true,
  
  // Sidebar options
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  
  // Toolbar options
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
  
  // Enable keyboard shortcuts
  enableShortcuts: true,
  
  // Initial active state
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  
  // Selected panel
  selectedPanel: 'storybook/controls/panel',
});