# Web Blocks

A collection of reusable web components built with vanilla JavaScript and Web Components API. Perfect for building modern, framework-agnostic user interfaces.

## ✨ Features

- **Framework Agnostic**: Works with React, Vue, Angular, or vanilla JavaScript
- **Zero Dependencies**: Pure web components with no external dependencies
- **Accessible**: Built with accessibility best practices
- **Customizable**: Easy to theme with CSS custom properties
- **TypeScript Ready**: Full type definitions available
- **Storybook Documentation**: Interactive component playground

## 🚀 Quick Start

### Installation

```bash
npm install @yourusername/web-components
```

### Basic Usage

```javascript
import { Button, Input } from '@yourusername/web-components';

// Create a button
const button = new Button({
  label: 'Click me',
  variant: 'primary',
  onClick: () => console.log('clicked!')
});

// Create an input
const input = new Input({
  placeholder: 'Enter your name',
  type: 'text'
});

// Add to DOM
document.body.appendChild(button.render());
document.body.appendChild(input.render());
```

### Individual Component Imports

```javascript
// Import specific components
import { Button } from '@yourusername/web-components/button';
import { Input } from '@yourusername/web-components/input';

// Or import HTML directly
import '@yourusername/web-components/button.html';
```

## 📦 Components

### Button
A flexible button component with multiple variants, sizes, and states.

```javascript
import { Button } from '@yourusername/web-components';

const button = new Button({
  label: 'Save Changes',
  variant: 'primary', // 'primary' | 'secondary' | 'ghost' | 'danger'
  size: 'medium',     // 'small' | 'medium' | 'large'
  disabled: false,
  onClick: () => console.log('saved!')
});
```

### Input
A versatile input component with validation and styling options.

```javascript
import { Input } from '@yourusername/web-components';

const input = new Input({
  placeholder: 'Enter your email',
  type: 'email',
  required: true,
  onChange: (value) => console.log('value:', value)
});
```

## 🎨 Styling

All components use CSS custom properties for theming. Override these in your global styles:

```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-danger: #dc3545;
  --color-white: #ffffff;
  
  /* Spacing */
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  
  /* Typography */
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  
  /* Other */
  --radius-md: 6px;
  --transition-normal: 0.2s ease;
}
```

## 🔧 Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/web-blocks.git
cd web-blocks

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build for production
npm run build-storybook
```

### Project Structure
```
src/
├── components/
│   ├── button/
│   │   ├── Button.js          # Component class
│   │   ├── button.html        # Web component definition
│   │   ├── Button.stories.js  # Storybook stories
│   │   └── README.md          # Component documentation
│   ├── input/
│   │   ├── Input.js
│   │   ├── input.html
│   │   ├── Input.stories.js
│   │   └── README.md
│   └── index.js               # Main exports
├── styles/
│   ├── tokens.css             # Design tokens
│   └── reset.css              # CSS reset
└── utils/
    └── helpers.js             # Utility functions
```

## 🌐 Browser Support

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## 📚 Documentation

- [Storybook Documentation](https://yourusername.github.io/web-blocks) - Interactive component playground
- [Component API Reference](./src/components/) - Detailed API documentation
- [Design System](./src/styles/) - Design tokens and theming guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Documented with [Storybook](https://storybook.js.org/)
- Styled with modern CSS and custom properties