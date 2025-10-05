# Input Component

A flexible and accessible input component with validation states, various input types, and comprehensive form features.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/input.css">
<script type="module">
  import { Input } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/input.js';
  
  const input = new Input({ 
    type: 'text',
    label: 'Your Name',
    placeholder: 'Enter your name',
    helperText: 'This will be displayed publicly',
    required: true
  });
  
  document.body.appendChild(input.render());
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'text' | Input type: 'text', 'email', 'password', 'number', 'tel', 'url', 'search' |
| `placeholder` | string | '' | Placeholder text for the input |
| `value` | string | '' | Initial value of the input |
| `label` | string | '' | Label text for the input |
| `helperText` | string | '' | Helper text below the input |
| `errorText` | string | '' | Error text to display |
| `state` | string | 'default' | Validation state: 'default', 'error', 'success', 'warning' |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | Whether the input is required |
| `className` | string | '' | Additional CSS classes |
| `attributes` | object | {} | Additional HTML attributes |
| `onChange` | function | () => {} | Function called when input value changes |
| `onFocus` | function | () => {} | Function called when input receives focus |
| `onBlur` | function | () => {} | Function called when input loses focus |

## Examples

### Basic Text Input
```javascript
const textInput = new Input({
  type: 'text',
  label: 'Full Name',
  placeholder: 'Enter your full name',
  required: true
});
```

### Email Input with Validation
```javascript
const emailInput = new Input({
  type: 'email',
  label: 'Email Address',
  placeholder: 'your@email.com',
  helperText: 'We\'ll never share your email',
  required: true,
  onChange: (e) => validateEmail(e.target.value)
});
```

### Password Input
```javascript
const passwordInput = new Input({
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
  helperText: 'Must be at least 8 characters',
  required: true
});
```

### Input with Error State
```javascript
const errorInput = new Input({
  type: 'text',
  label: 'Username',
  placeholder: 'Choose a username',
  errorText: 'Username is already taken',
  state: 'error',
  required: true
});
```

### Input with Success State
```javascript
const successInput = new Input({
  type: 'text',
  label: 'Valid Input',
  value: 'Perfect!',
  helperText: 'This looks good',
  state: 'success'
});
```

### Disabled Input
```javascript
const disabledInput = new Input({
  type: 'text',
  label: 'Read-only Field',
  value: 'Cannot be changed',
  disabled: true,
  helperText: 'This field is disabled'
});
```

### Custom Attributes
```javascript
const customInput = new Input({
  type: 'text',
  label: 'Custom Input',
  attributes: {
    'data-testid': 'custom-input',
    'autocomplete': 'name',
    'maxlength': '50'
  }
});
```

## Validation States

- **Default**: Standard input appearance
- **Error**: Red border and error text for validation errors
- **Success**: Green border for successful validation
- **Warning**: Yellow border for warnings

## Accessibility

- **Labels**: Proper label association for screen readers
- **Required Fields**: Visual and programmatic indication of required fields
- **Error Messages**: Clear error communication with ARIA attributes
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready and follows accessibility best practices.
