# Badge Component

A flexible badge component for status indicators, labels, and notifications. Perfect for displaying counts, status, and short text labels.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/badge.css">
<script type="module">
  import { Badge } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/badge.js';
  
  const badge = new Badge({ 
    text: 'New',
    variant: 'primary',
    size: 'medium',
    shape: 'rounded'
  });
  
  document.body.appendChild(badge.render());
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | 'Badge' | The text content of the badge |
| `variant` | string | 'default' | Color variant: 'default', 'primary', 'success', 'warning', 'danger', 'info' |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `shape` | string | 'rounded' | Shape: 'rounded', 'pill', 'square' |
| `dismissible` | boolean | false | Whether the badge can be dismissed |
| `icon` | string | '' | Icon content (HTML string) |
| `className` | string | '' | Additional CSS classes |
| `attributes` | object | {} | Additional HTML attributes |
| `onDismiss` | function | () => {} | Function called when badge is dismissed |

## Examples

### Basic Badge
```javascript
const badge = new Badge({
  text: 'New',
  variant: 'primary',
  size: 'medium'
});
```

### Status Badge
```javascript
const statusBadge = new Badge({
  text: 'Online',
  variant: 'success',
  size: 'small',
  shape: 'pill'
});
```

### Badge with Icon
```javascript
const iconBadge = new Badge({
  text: 'Hot',
  icon: '🔥',
  variant: 'danger',
  size: 'medium'
});
```

### Dismissible Badge
```javascript
const dismissibleBadge = new Badge({
  text: 'Dismissible',
  variant: 'warning',
  dismissible: true,
  onDismiss: () => console.log('Badge dismissed')
});
```

### Notification Badge
```javascript
const notificationBadge = new Badge({
  text: '3',
  variant: 'danger',
  size: 'small',
  shape: 'pill',
  className: 'badge--notification'
});
```

### Badge with Custom Attributes
```javascript
const customBadge = new Badge({
  text: 'Custom',
  variant: 'info',
  attributes: {
    'data-testid': 'custom-badge',
    'role': 'status'
  }
});
```

## Variants

- **Default**: Gray background for neutral information
- **Primary**: Blue background for primary actions
- **Success**: Green background for success states
- **Warning**: Yellow background for warnings
- **Danger**: Red background for errors or important alerts
- **Info**: Light blue background for informational content

## Shapes

- **Rounded**: Standard rounded corners
- **Pill**: Fully rounded (capsule shape)
- **Square**: Minimal rounded corners

## Accessibility

- **Screen Readers**: Proper semantic markup for screen readers
- **Dismissible**: Clear dismiss button with proper ARIA labels
- **Color Contrast**: All variants meet WCAG contrast requirements
- **Focus Management**: Proper focus indicators for interactive elements

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready and follows accessibility best practices.
