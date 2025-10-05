# Button Component

A flexible and accessible button component with multiple variants, sizes, and states.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/button.css">
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/button.js';
  
  const button = new Button({ 
    label: 'Click me',
    variant: 'primary',
    size: 'medium',
    onClick: () => console.log('Button clicked!')
  });
  
  document.body.appendChild(button.render());
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | 'Button' | The text content of the button |
| `variant` | string | 'primary' | Visual style: 'primary', 'secondary', 'ghost', 'danger' |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `disabled` | boolean | false | Whether the button is disabled |
| `type` | string | 'button' | HTML button type: 'button', 'submit', 'reset' |
| `onClick` | function | () => {} | Function called when button is clicked |
| `className` | string | '' | Additional CSS classes |
| `attributes` | object | {} | Additional HTML attributes |

## Examples

### Basic Usage
```javascript
const button = new Button({
  label: 'Save Changes',
  variant: 'primary',
  onClick: () => saveData()
});
```

### Form Submit Button
```javascript
const submitButton = new Button({
  label: 'Submit',
  type: 'submit',
  variant: 'primary',
  size: 'large'
});
```

### Disabled Button
```javascript
const disabledButton = new Button({
  label: 'Processing...',
  disabled: true,
  variant: 'secondary'
});
```

### Custom Attributes
```javascript
const customButton = new Button({
  label: 'Custom Button',
  attributes: {
    'data-testid': 'custom-button',
    'aria-label': 'Custom button for testing'
  }
});
```

## Accessibility

- **Keyboard Navigation**: Fully keyboard accessible with proper focus management
- **Screen Readers**: Uses semantic HTML button element with proper ARIA attributes
- **Focus Indicators**: Clear focus outlines for keyboard navigation
- **Disabled State**: Properly communicates disabled state to assistive technologies

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready and follows accessibility best practices.
