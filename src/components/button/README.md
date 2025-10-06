# Button Component

A flexible button component with multiple variants, sizes, and states. Perfect for forms, navigation, and interactive elements.

## Features

- **Multiple Variants**: Primary, secondary, ghost, and danger styles
- **Size Options**: Small, medium, and large sizes
- **States**: Normal, disabled, and loading states
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Easy to theme with CSS custom properties
- **Framework Agnostic**: Works with any framework or vanilla JavaScript
- **Zero Dependencies**: Pure web components with no external dependencies

## Installation

```bash
npm install @your-org/button-component
```

## Usage

### JavaScript API (Recommended)

```javascript
import { Button } from '@your-org/button-component';

// Create a button instance
const button = new Button({
  label: 'Click me',
  variant: 'primary',
  size: 'medium',
  onClick: () => console.log('clicked')
});

// Render and append to DOM
document.body.appendChild(button.render());
```

### Direct Web Component Usage

```html
<!-- Include the component -->
<script type="module" src="@your-org/button-component/button.html"></script>

<!-- Use the component -->
<wc-button variant="primary" size="large">
  Click me
</wc-button>
```

### React Integration

```jsx
import { Button } from '@your-org/button-component';
import { useEffect, useRef } from 'react';

function MyComponent() {
  const buttonRef = useRef();

  useEffect(() => {
    const button = new Button({
      label: 'React Button',
      variant: 'primary',
      onClick: () => console.log('clicked from React')
    });
    
    buttonRef.current.appendChild(button.render());
  }, []);

  return <div ref={buttonRef} />;
}
```

### Vue Integration

```vue
<template>
  <div ref="buttonContainer"></div>
</template>

<script>
import { Button } from '@your-org/button-component';

export default {
  mounted() {
    const button = new Button({
      label: 'Vue Button',
      variant: 'primary',
      onClick: () => console.log('clicked from Vue')
    });
    
    this.$refs.buttonContainer.appendChild(button.render());
  }
}
</script>
```

## API Reference

### Button Class

#### Constructor

```javascript
new Button(props)
```

#### Parameters

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Button text content |
| `variant` | `string` | `'primary'` | Visual style variant |
| `size` | `string` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `type` | `string` | `'button'` | HTML button type |
| `loading` | `boolean` | `false` | Whether button is in loading state |
| `onClick` | `function` | `null` | Click handler function |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `render()` | - | Returns the rendered button element |
| `update(props)` | `props` | Updates button properties |

### Web Component Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Visual style variant |
| `size` | `string` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `type` | `string` | `'button'` | HTML button type |
| `loading` | `boolean` | `false` | Whether button is in loading state |

### Variants

- `primary` - Main action button with solid background
- `secondary` - Secondary action with outlined style
- `ghost` - Subtle button with transparent background
- `danger` - Destructive action button

### Sizes

- `small` - Compact button for tight spaces
- `medium` - Standard button size
- `large` - Prominent button for primary actions

### Events

| Event | Description |
|-------|-------------|
| `wc-button-click` | Fired when button is clicked |

## Styling

The component uses CSS custom properties for theming. You can override these in your global styles:

```css
:root {
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-primary-light: #e6f3ff;
  --color-danger: #dc3545;
  --color-danger-hover: #c82333;
  --color-white: #ffffff;
  --radius-md: 6px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-weight-medium: 500;
  --transition-normal: 0.2s ease;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Browser Support

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build for production
npm run build
```

## License

MIT