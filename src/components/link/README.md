# Link Component

A standalone link component with two variants: `inline` and `crosshair`.

## Usage

```html
<script type="module">
  import { Link } from '../link/Link.js';
  
  const inline = new Link({ label: 'Inline link', href: '#', variant: 'inline' });
  document.body.appendChild(inline.render());
  
  const crosshair = new Link({ label: 'Crosshair link', href: '#', variant: 'crosshair' });
  document.body.appendChild(crosshair.render());
</script>
```

## Variants

- **inline**: Standard underlined link.
- **crosshair**: Shows animated corner lines on hover/focus.

## Attributes

- **href**: Destination URL.
- **target**: One of `_self`, `_blank`, `_parent`, `_top`.
- **variant**: `inline` or `crosshair`.

## Direct Web Component

```html
<wc-link href="#" variant="crosshair">Crosshair link</wc-link>
```

## Status

Stable.
