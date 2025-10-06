# Web Blocks

**🚧 Work in Progress** - A collection of reusable web components built with vanilla JavaScript and Web Components API. Currently focused on Storybook implementations with plans for broader integration.

## 📋 Current Status

This project is currently in **development phase** with the following focus:

- ✅ **Storybook Documentation**: Interactive component playground and design system
- ✅ **Component Prototypes**: Basic Button and Input components
- 🚧 **Integration Ready**: Future implementation will allow easy integration into your own projects
- 🔮 **Planned Features**: Framework-agnostic usage, npm package distribution, and production-ready components

## 🎯 What's Available Now

### Storybook Playground
The best way to explore and interact with components:

```bash
# Start Storybook to see all components in action
npm run storybook
```

### Live Examples
See components in a real HTML page:

```bash
# Serve the examples page
npm run serve
```

### Component Development
- **Button Component**: Animated underlined text links with corner line effects
- **Input Component**: Form inputs with validation states and accessibility features
- **Design System**: CSS custom properties and design tokens
- **Storybook Stories**: Interactive documentation and testing

## 🔮 Future Implementation

Once development is complete, you'll be able to use these components in your own projects:

### Planned Integration Options

#### Option 1: Direct HTML (No JavaScript required)
```html
<!-- Include design tokens and reset styles -->
<link rel="stylesheet" href="./src/styles/tokens.css">
<link rel="stylesheet" href="./src/styles/reset.css">

<!-- Include the component you want to use -->
<script src="./src/components/button/button.html"></script>
<script src="./src/components/input/input.html"></script>

<!-- Use in your HTML -->
<wc-button variant="primary">Click me</wc-button>
<wc-input label="Your Name" placeholder="Enter your name"></wc-input>
```

#### Option 2: JavaScript Classes
```javascript
import { Button, Input } from '@yourusername/web-components';

// Create a button
const button = new Button({
  label: 'Click me',
  href: '/some-page',
  onClick: () => console.log('clicked!')
});

// Create an input
const input = new Input({
  label: 'Your Name',
  placeholder: 'Enter your name',
  type: 'text'
});

// Add to DOM
document.body.appendChild(button.render());
document.body.appendChild(input.render());
```

#### Option 3: NPM Package
```bash
npm install @yourusername/web-components
```

## 📦 Current Components

*Note: These are currently available in Storybook for development and testing. Integration options will be available in future releases.*

### Button Component
A simple underlined text link with corner lines animation on hover/focus.

**Current Status**: ✅ Storybook stories complete, 🚧 Integration in progress

**See it in action**: Run `npm run storybook` and navigate to the Button stories

### Input Component  
A flexible input component with validation states and various input types.

**Current Status**: ✅ Storybook stories complete, 🚧 Integration in progress

**See it in action**: Run `npm run storybook` and navigate to the Input stories

### Design System
CSS custom properties and design tokens for consistent theming.

**Current Status**: ✅ Design tokens defined, 🚧 Component integration ongoing

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

# Start Storybook (Primary development environment)
npm run storybook

# Serve examples (Alternative view)
npm run serve

# Build Storybook for production
npm run build-storybook
```

### Current Development Focus
- **Storybook Stories**: Interactive component documentation and testing
- **Component Design**: Refining component APIs and behaviors
- **Design System**: Establishing consistent patterns and tokens
- **Integration Planning**: Preparing for future distribution and usage

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

### Current Documentation
- **Storybook Documentation** - Interactive component playground (run `npm run storybook`)
- **Live Examples** - See components in action (run `npm run serve`)
- **Component Stories** - Individual component documentation in Storybook

### Future Documentation
- **API Reference** - Detailed component APIs and usage patterns
- **Integration Guides** - Step-by-step setup for different frameworks
- **Design System Docs** - Complete theming and customization guide

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