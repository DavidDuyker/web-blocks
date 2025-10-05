# Modal Component

A flexible modal component with overlay, dialog, and accessibility features. Perfect for dialogs, forms, and content overlays.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/modal.css">
<script type="module">
  import { Modal } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/modal.js';
  
  const modal = new Modal({ 
    title: 'Modal Title',
    content: 'Modal content goes here',
    footer: 'Modal footer',
    size: 'medium',
    closable: true
  });
  
  const modalContainer = modal.render();
  document.body.appendChild(modalContainer);
  
  // Open the modal
  modal.open();
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | The title of the modal |
| `content` | string | '' | The main content of the modal |
| `footer` | string | '' | The footer content of the modal |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large', 'fullscreen' |
| `closable` | boolean | true | Whether the modal can be closed |
| `backdrop` | boolean | true | Whether to show backdrop |
| `className` | string | '' | Additional CSS classes |
| `attributes` | object | {} | Additional HTML attributes |
| `onOpen` | function | () => {} | Function called when modal is opened |
| `onClose` | function | () => {} | Function called when modal is closed |

## Methods

| Method | Description |
|--------|-------------|
| `open()` | Opens the modal |
| `close()` | Closes the modal |
| `toggle()` | Toggles the modal open/closed |
| `destroy()` | Removes the modal from DOM |

## Examples

### Basic Modal
```javascript
const modal = new Modal({
  title: 'Confirm Action',
  content: 'Are you sure you want to proceed?',
  footer: '<button class="btn btn--primary">Confirm</button>',
  size: 'small'
});

const container = modal.render();
document.body.appendChild(container);
modal.open();
```

### Large Modal with Form
```javascript
const modal = new Modal({
  title: 'User Settings',
  content: `
    <form>
      <label>Name: <input type="text" name="name"></label>
      <label>Email: <input type="email" name="email"></label>
    </form>
  `,
  footer: `
    <button class="btn btn--secondary">Cancel</button>
    <button class="btn btn--primary">Save</button>
  `,
  size: 'large'
});
```

### Fullscreen Modal
```javascript
const modal = new Modal({
  title: 'Fullscreen Content',
  content: 'This modal takes up the entire screen.',
  size: 'fullscreen',
  backdrop: false
});
```

### Non-Closable Modal
```javascript
const modal = new Modal({
  title: 'Processing',
  content: 'Please wait while we process your request...',
  closable: false,
  backdrop: true
});
```

### Modal with Event Handlers
```javascript
const modal = new Modal({
  title: 'Interactive Modal',
  content: 'This modal has event handlers.',
  onOpen: () => console.log('Modal opened'),
  onClose: () => console.log('Modal closed')
});
```

### Programmatic Control
```javascript
const modal = new Modal({
  title: 'Controlled Modal',
  content: 'This modal is controlled programmatically.'
});

// Open modal
modal.open();

// Close modal
modal.close();

// Toggle modal
modal.toggle();

// Remove modal
modal.destroy();
```

## Accessibility

- **Focus Management**: Automatically traps focus within the modal
- **Keyboard Navigation**: Full keyboard support with Tab and Shift+Tab
- **Screen Readers**: Proper ARIA attributes and semantic markup
- **Escape Key**: Closes modal when Escape is pressed (if closable)
- **Focus Restoration**: Returns focus to the element that opened the modal

## Keyboard Shortcuts

- **Escape**: Close modal (if closable)
- **Tab**: Move to next focusable element
- **Shift + Tab**: Move to previous focusable element

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready and follows accessibility best practices.
