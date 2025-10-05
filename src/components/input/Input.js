/**
 * Input Component
 * A flexible input component with validation states and various input types
 * @param {Object} options - Component configuration
 * @param {string} options.type - Input type: 'text'|'email'|'password'|'number'|'tel'|'url'|'search'
 * @param {string} options.placeholder - Placeholder text
 * @param {string} options.value - Initial value
 * @param {string} options.label - Label text
 * @param {string} options.helperText - Helper text below input
 * @param {string} options.errorText - Error text to display
 * @param {string} options.state - 'default'|'error'|'success'|'warning'
 * @param {string} options.size - 'small'|'medium'|'large'
 * @param {boolean} options.disabled - Whether the input is disabled
 * @param {boolean} options.required - Whether the input is required
 * @param {string} options.className - Additional CSS classes
 * @param {Object} options.attributes - Additional HTML attributes
 * @param {Function} options.onChange - Change handler
 * @param {Function} options.onFocus - Focus handler
 * @param {Function} options.onBlur - Blur handler
 */
export class Input {
  constructor(options = {}) {
    this.options = {
      type: 'text',
      placeholder: '',
      value: '',
      label: '',
      helperText: '',
      errorText: '',
      state: 'default',
      size: 'medium',
      disabled: false,
      required: false,
      className: '',
      attributes: {},
      onChange: () => {},
      onFocus: () => {},
      onBlur: () => {},
      ...options
    };
  }

  render() {
    const container = document.createElement('div');
    container.className = 'input-container';
    
    // Create label if provided
    if (this.options.label) {
      const label = document.createElement('label');
      label.className = 'input-label';
      label.textContent = this.options.label;
      if (this.options.required) {
        label.innerHTML += ' <span class="input-required">*</span>';
      }
      container.appendChild(label);
    }
    
    // Create input wrapper
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    
    // Create input element
    const input = document.createElement('input');
    
    // Base classes
    const baseClasses = ['input'];
    const stateClass = `input--${this.options.state}`;
    const sizeClass = `input--${this.options.size}`;
    const disabledClass = this.options.disabled ? 'input--disabled' : '';
    
    // Combine all classes
    const allClasses = [
      ...baseClasses,
      stateClass,
      sizeClass,
      disabledClass,
      this.options.className
    ].filter(Boolean);
    
    input.className = allClasses.join(' ');
    
    // Set attributes
    input.type = this.options.type;
    input.placeholder = this.options.placeholder;
    input.value = this.options.value;
    input.disabled = this.options.disabled;
    input.required = this.options.required;
    
    // Add custom attributes
    Object.entries(this.options.attributes).forEach(([key, value]) => {
      input.setAttribute(key, value);
    });
    
    // Add event listeners
    input.addEventListener('change', this.options.onChange);
    input.addEventListener('focus', this.options.onFocus);
    input.addEventListener('blur', this.options.onBlur);
    
    inputWrapper.appendChild(input);
    container.appendChild(inputWrapper);
    
    // Create helper text or error text
    if (this.options.errorText) {
      const errorText = document.createElement('div');
      errorText.className = 'input-error';
      errorText.textContent = this.options.errorText;
      container.appendChild(errorText);
    } else if (this.options.helperText) {
      const helperText = document.createElement('div');
      helperText.className = 'input-helper';
      helperText.textContent = this.options.helperText;
      container.appendChild(helperText);
    }
    
    return container;
  }
}

// Export for direct CDN usage
export default Input;
