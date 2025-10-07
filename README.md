# Web Blocks

**✨ Ready to Use** - A collection of standalone web components built with vanilla JavaScript and Web Components API. Perfect for vanilla HTML, CSS, and JS websites with zero dependencies!

## 🚀 Quick Start

Add these components to your HTML with just a single script tag:

```html
<!-- Include the components you need -->
<script src="Button.js"></script>
<script src="Input.js"></script>
<script src="Link.js"></script>

<!-- Use them directly in your HTML -->
<wc-button href="https://example.com">Click me</wc-button>
<wc-input label="Email" type="email" placeholder="Enter your email"></wc-input>
<wc-link href="/about" variant="crosshair">About us</wc-link>
```

**That's it!** No bundlers, no dependencies, no complex setup required.

## 📋 What's Available

- ✅ **Standalone Components**: Ready-to-use with single script imports
- ✅ **Storybook Documentation**: [Interactive component playground](https://davidduyker.github.io/web-blocks)
- ✅ **Vanilla HTML Support**: Works in any HTML page
- ✅ **Zero Dependencies**: Pure vanilla JavaScript and Web Components
- ✅ **Modern Browser Support**: Chrome 54+, Firefox 63+, Safari 10.1+, Edge 79+

## 🎯 Usage Options

### Option 1: Direct Web Components (Recommended)
Use the custom elements directly in your HTML:

```html
<script src="Button.js"></script>
<script src="Input.js"></script>
<script src="Link.js"></script>

<!-- Use directly in HTML -->
<wc-button href="https://example.com">Click me</wc-button>
<wc-input label="Email" type="email" placeholder="Enter your email"></wc-input>
<wc-link href="/about" variant="crosshair">About us</wc-link>
```

### Option 2: JavaScript Classes
Create components programmatically:

```html
<script src="Button.js"></script>
<script src="Input.js"></script>
<script src="Link.js"></script>

<script>
// Create components with JavaScript
const button = new Button({
  label: 'Click me',
  href: '/some-page',
  onClick: () => console.log('clicked!')
});

const input = new Input({
  label: 'Your Name',
  placeholder: 'Enter your name',
  type: 'text',
  onChange: (e) => console.log('Value changed:', e.detail.value)
});

// Add to DOM
document.body.appendChild(button.render());
document.body.appendChild(input.render());
</script>
```

### Option 3: ES Modules (For bundlers)
```javascript
import { Button, Input, Link } from './src/components/index.js';

const button = new Button({ label: 'Click me' });
document.body.appendChild(button.render());
```

## 🎨 Storybook Playground
The best way to explore and interact with components:

```bash
# Start Storybook to see all components in action
npm run storybook
```

## 📱 Live Examples
See components in a real HTML page:

```bash
# Serve the examples page
npm run serve
```

## 📦 Available Components

### Button Component
A simple underlined text link with corner lines animation on hover/focus.

**Features**:
- Animated corner lines on hover/focus
- Support for internal and external links
- Disabled state
- Click event handling
- Responsive design

**Usage**:
```html
<wc-button href="https://example.com">Click me</wc-button>
```

### Input Component  
A flexible input component with validation states and various input types.

**Features**:
- Multiple input types (text, email, password, number, tel, url, search)
- Validation states (default, error, success, warning)
- Different sizes (small, medium, large)
- Helper text and error messages
- Accessibility features
- Event handling (change, focus, blur)

**Usage**:
```html
<wc-input label="Email" type="email" placeholder="Enter your email" required></wc-input>
```

### Link Component
A standalone link component with inline and crosshair variants.

**Features**:
- Inline variant: Simple underlined text
- Crosshair variant: Animated corner lines on hover
- Support for internal and external links
- Customizable styling

**Usage**:
```html
<wc-link href="/about" variant="crosshair">About us</wc-link>
```

### Design System
CSS custom properties and design tokens for consistent theming.

**Features**:
- Consistent color palette
- Typography scale
- Spacing system
- Border radius values
- Transition timings

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
- **[Storybook Documentation](https://davidduyker.github.io/web-blocks)** - Interactive component playground
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