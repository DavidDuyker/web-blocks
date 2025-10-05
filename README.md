# Web Components Library

A standalone web components library with Storybook documentation for showcasing experimental and production-ready UI components. Components are framework-agnostic, build-free, and consumable via simple `<script>` tags on any static HTML site.

## 🚀 Quick Start

### CDN Usage (Recommended)

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.css">
</head>
<body>
  <script type="module">
    import { Button, Card, Input, Badge, Modal } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.js';
    
    // Create a button
    const button = new Button({ 
      label: 'Click me', 
      variant: 'primary',
      onClick: () => alert('Hello!')
    });
    document.body.appendChild(button.render());
    
    // Create a card
    const card = new Card({ 
      title: 'Welcome',
      content: 'This is a card component',
      variant: 'default'
    });
    document.body.appendChild(card.render());
  </script>
</body>
</html>
```

### Individual Component Usage

```html
<!-- Button Component -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.css">
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.js';
  
  const button = new Button({ 
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  });
  document.body.appendChild(button.render());
</script>
```

## 📚 Documentation

- **[Storybook Documentation](https://yourusername.github.io/web-components)** - Interactive component playground
- **[Component API Reference](#components)** - Detailed component documentation
- **[CDN Usage Examples](#cdn-usage)** - Copy-paste examples for each component

## 🧩 Components

### Button
Flexible button component with multiple variants and sizes.

```javascript
const button = new Button({
  label: 'Click me',
  variant: 'primary', // 'primary' | 'secondary' | 'ghost' | 'danger'
  size: 'medium',     // 'small' | 'medium' | 'large'
  disabled: false,
  onClick: () => console.log('Clicked!')
});
```

### Card
Flexible card component with header, body, and footer sections.

```javascript
const card = new Card({
  title: 'Card Title',
  subtitle: 'Card subtitle',
  content: 'Card content goes here',
  footer: 'Card footer',
  variant: 'default', // 'default' | 'elevated' | 'outlined' | 'flat'
  size: 'medium'      // 'small' | 'medium' | 'large'
});
```

### Input
Flexible input component with validation states and various input types.

```javascript
const input = new Input({
  type: 'text',
  label: 'Your Name',
  placeholder: 'Enter your name',
  helperText: 'This will be displayed publicly',
  state: 'default',   // 'default' | 'error' | 'success' | 'warning'
  size: 'medium',     // 'small' | 'medium' | 'large'
  required: true
});
```

### Badge
Flexible badge component for status indicators and labels.

```javascript
const badge = new Badge({
  text: 'New',
  variant: 'primary', // 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size: 'medium',     // 'small' | 'medium' | 'large'
  shape: 'rounded',   // 'rounded' | 'pill' | 'square'
  dismissible: false
});
```

### Modal
Flexible modal component with overlay, dialog, and accessibility features.

```javascript
const modal = new Modal({
  title: 'Modal Title',
  content: 'Modal content goes here',
  footer: 'Modal footer',
  size: 'medium',     // 'small' | 'medium' | 'large' | 'fullscreen'
  closable: true,
  backdrop: true
});

const container = modal.render();
document.body.appendChild(container);
modal.open();
```

## 🎨 Design System

### Design Tokens
All components use CSS custom properties for consistent theming:

```css
:root {
  --color-primary: #0066ff;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  --radius-md: 0.5rem;
  --space-4: 1rem;
  /* ... and many more */
}
```

### Customization
Override design tokens to customize the appearance:

```css
:root {
  --color-primary: #your-brand-color;
  --font-sans: 'Your Custom Font', system-ui;
}
```

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/web-components.git
cd web-components

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Available Scripts
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build-components` - Build components for distribution
- `npm run preview` - Preview built Storybook locally

### Project Structure
```
web-components/
├── .github/workflows/     # GitHub Actions
├── .storybook/            # Storybook configuration
├── src/
│   ├── components/        # Component implementations
│   │   ├── button/
│   │   ├── card/
│   │   ├── input/
│   │   ├── badge/
│   │   └── modal/
│   ├── styles/            # Design tokens and reset
│   └── utils/             # Utility functions
├── dist/                  # Built components for CDN
├── scripts/               # Build scripts
└── public/                # Static assets
```

## 🚀 Deployment

### GitHub Pages
Storybook is automatically deployed to GitHub Pages on every push to the `main` branch.

### CDN Distribution
Components are distributed via jsDelivr CDN:
- **Latest**: `https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/`
- **Specific Version**: `https://cdn.jsdelivr.net/gh/yourusername/web-components@v0.1.0/dist/`

## 🧪 Testing

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Accessibility
All components follow WCAG 2.1 AA guidelines:
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## 📦 CDN Usage

### Individual Components
```html
<!-- Button -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.css">
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/button/button.js';
</script>

<!-- Card -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/card/card.css">
<script type="module">
  import { Card } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/card/card.js';
</script>
```

### All Components
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.css">
<script type="module">
  import { Button, Card, Input, Badge, Modal } from 'https://cdn.jsdelivr.net/gh/yourusername/web-components@main/dist/index.js';
</script>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Component Status
- **Stable**: Production-ready components
- **Beta**: Feature-complete, may have minor issues
- **Experimental**: New features, API may change

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **[Storybook Documentation](https://yourusername.github.io/web-components)**
- **[GitHub Repository](https://github.com/yourusername/web-components)**
- **[Issue Tracker](https://github.com/yourusername/web-components/issues)**
- **[Changelog](https://github.com/yourusername/web-components/blob/main/CHANGELOG.md)**

---

Built with ❤️ using vanilla JavaScript and modern web standards.
