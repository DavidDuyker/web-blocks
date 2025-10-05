# Card Component

A flexible card component with header, body, and footer sections for organizing content.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/card.css">
<script type="module">
  import { Card } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/card.js';
  
  const card = new Card({ 
    title: 'Card Title',
    subtitle: 'Card subtitle',
    content: 'Card content goes here',
    footer: 'Card footer',
    variant: 'default',
    size: 'medium'
  });
  
  document.body.appendChild(card.render());
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | The title of the card |
| `subtitle` | string | '' | The subtitle of the card |
| `content` | string | '' | The main content of the card |
| `footer` | string | '' | The footer content of the card |
| `variant` | string | 'default' | Visual style: 'default', 'elevated', 'outlined', 'flat' |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `className` | string | '' | Additional CSS classes |
| `attributes` | object | {} | Additional HTML attributes |

## Examples

### Basic Card
```javascript
const card = new Card({
  title: 'Welcome',
  content: 'Welcome to our application!',
  variant: 'default'
});
```

### Elevated Card
```javascript
const elevatedCard = new Card({
  title: 'Featured Content',
  subtitle: 'Important information',
  content: 'This content stands out with an elevated appearance.',
  footer: 'Last updated: Today',
  variant: 'elevated',
  size: 'large'
});
```

### Content Only
```javascript
const simpleCard = new Card({
  content: 'Just some content without header or footer.',
  variant: 'flat'
});
```

### Card with Custom Attributes
```javascript
const customCard = new Card({
  title: 'Custom Card',
  content: 'Card with custom attributes',
  attributes: {
    'data-testid': 'custom-card',
    'role': 'article'
  }
});
```

## Variants

- **Default**: Standard card with subtle border and shadow
- **Elevated**: Prominent shadow for emphasis
- **Outlined**: Strong border instead of shadow
- **Flat**: Minimal design with no shadows or borders

## Accessibility

- **Semantic HTML**: Uses proper heading hierarchy with h3 for titles
- **Screen Readers**: Clear content structure with proper sections
- **Focus Management**: Cards are not focusable by default (use interactive elements inside)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready and follows accessibility best practices.
