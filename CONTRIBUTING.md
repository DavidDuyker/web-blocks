# Contributing Guide

Thank you for your interest in contributing to the Web Components Library! This guide will help you get started with contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/yourusername/web-components.git
cd web-components

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

## 📋 Component Creation Checklist

When creating a new component, follow this checklist:

### 1. File Structure
```
src/components/[component-name]/
├── ComponentName.js          # Component implementation
├── ComponentName.css         # Component styles
├── ComponentName.stories.js  # Storybook stories
└── README.md                 # Component documentation
```

### 2. Component Implementation (`ComponentName.js`)
- [ ] Export as ES6 module
- [ ] No framework dependencies
- [ ] Self-contained logic
- [ ] JSDoc comments for all options
- [ ] Default export for CDN usage
- [ ] Proper error handling

### 3. Component Styles (`ComponentName.css`)
- [ ] Use CSS custom properties from design tokens
- [ ] Follow BEM methodology or CSS modules pattern
- [ ] No external dependencies
- [ ] Responsive design
- [ ] Accessibility considerations
- [ ] Dark mode support (if applicable)

### 4. Storybook Stories (`ComponentName.stories.js`)
- [ ] Multiple variants (default, states, sizes)
- [ ] Interactive controls for props
- [ ] Documentation and usage examples
- [ ] Status tag (experimental/beta/stable)
- [ ] Accessibility testing
- [ ] Responsive examples

### 5. Documentation (`README.md`)
- [ ] Component API documentation
- [ ] Usage examples (HTML import)
- [ ] Props/options table
- [ ] Accessibility notes
- [ ] Browser support
- [ ] Status indicator

## 🎨 Design Guidelines

### Naming Conventions
- **Components**: PascalCase (`Button`, `Card`, `Input`)
- **Files**: PascalCase (`Button.js`, `Button.css`)
- **CSS Classes**: BEM methodology (`btn`, `btn--primary`, `btn__text`)
- **CSS Variables**: kebab-case (`--color-primary`, `--space-4`)

### Component API Design
- **Consistent Options**: Use similar option names across components
- **Sensible Defaults**: Provide good default values
- **Flexible**: Allow customization without complexity
- **Accessible**: Include accessibility features by default

### CSS Guidelines
- Use design tokens from `src/styles/tokens.css`
- Follow mobile-first responsive design
- Include focus states and hover effects
- Ensure color contrast meets WCAG AA standards

## 🧪 Testing Requirements

### Manual Testing
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Test responsive behavior
- [ ] Test accessibility features

### Storybook Testing
- [ ] All variants render correctly
- [ ] Interactive controls work
- [ ] Documentation is clear
- [ ] Examples are copy-pasteable

## 📝 Documentation Standards

### Component README Template
```markdown
# ComponentName

Brief description of the component.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/user/repo@main/dist/component.css">
<script type="module">
  import { Component } from 'https://cdn.jsdelivr.net/gh/user/repo@main/dist/component.js';
  
  const instance = new Component({ option: 'value' });
  document.body.appendChild(instance.render());
</script>
```

## Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Accessibility

- ARIA attributes used
- Keyboard navigation support
- Screen reader considerations

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Status

**Stable** - This component is production-ready.
```

## 🔄 Pull Request Process

### Before Submitting
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-component`)
3. **Follow** the component creation checklist
4. **Test** your component thoroughly
5. **Update** documentation as needed

### Pull Request Template
```markdown
## Description
Brief description of changes

## Component Status
- [ ] Experimental
- [ ] Beta  
- [ ] Stable

## Testing
- [ ] Manual testing completed
- [ ] Storybook stories added
- [ ] Documentation updated
- [ ] Accessibility tested

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

### Review Process
1. **Automated Checks**: CI/CD pipeline runs automatically
2. **Code Review**: Maintainers review code quality and standards
3. **Testing**: Manual testing of new components
4. **Documentation**: Ensure documentation is complete
5. **Approval**: Maintainer approval required for merge

## 🐛 Bug Reports

### Before Reporting
1. Check existing issues
2. Test with latest version
3. Verify it's a bug, not expected behavior

### Bug Report Template
```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- Browser: [e.g. Chrome 90]
- OS: [e.g. macOS 11]
- Component version: [e.g. 0.1.0]

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Before Requesting
1. Check if feature already exists
2. Consider if it fits the project scope
3. Think about implementation complexity

### Feature Request Template
```markdown
## Feature Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other approaches were considered?

## Additional Context
Any other relevant information
```

## 🏷️ Component Status

### Experimental
- New features in development
- API may change
- Use with caution
- Feedback welcome

### Beta
- Feature-complete
- API is stable
- May have minor issues
- Ready for testing

### Stable
- Production-ready
- Well-tested
- API is stable
- Recommended for use

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/)
- [Web Components Standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🤝 Community

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Code Review**: All contributions require review
- **Documentation**: Help improve documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the Web Components Library! 🎉
