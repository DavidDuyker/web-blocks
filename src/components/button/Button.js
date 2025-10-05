/**
 * Button Component
 * A flexible button component with multiple variants and sizes
 * @param {Object} options - Component configuration
 * @param {string} options.label - Button text
 * @param {string} options.variant - 'primary'|'secondary'|'ghost'|'danger'
 * @param {string} options.size - 'small'|'medium'|'large'
 * @param {boolean} options.disabled - Whether the button is disabled
 * @param {Function} options.onClick - Click handler
 * @param {string} options.type - HTML button type ('button'|'submit'|'reset')
 * @param {string} options.className - Additional CSS classes
 * @param {Object} options.attributes - Additional HTML attributes
 */
export class Button {
  constructor(options = {}) {
    this.options = {
      label: 'Button',
      variant: 'primary',
      size: 'medium',
      disabled: false,
      onClick: () => {},
      type: 'button',
      className: '',
      attributes: {},
      ...options
    };
  }

  render() {
    const button = document.createElement('button');
    
    // Base classes
    const baseClasses = ['btn'];
    const variantClass = `btn--${this.options.variant}`;
    const sizeClass = `btn--${this.options.size}`;
    const disabledClass = this.options.disabled ? 'btn--disabled' : '';
    
    // Combine all classes
    const allClasses = [
      ...baseClasses,
      variantClass,
      sizeClass,
      disabledClass,
      this.options.className
    ].filter(Boolean);
    
    button.className = allClasses.join(' ');
    
    // Set attributes
    button.type = this.options.type;
    button.disabled = this.options.disabled;
    button.textContent = this.options.label;
    
    // Add custom attributes
    Object.entries(this.options.attributes).forEach(([key, value]) => {
      button.setAttribute(key, value);
    });
    
    // Add click handler if not disabled
    if (!this.options.disabled) {
      button.addEventListener('click', this.options.onClick);
    }
    
    return button;
  }
}

// Export for direct CDN usage
export default Button;
