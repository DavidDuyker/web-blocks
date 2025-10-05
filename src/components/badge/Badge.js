/**
 * Badge Component
 * A flexible badge component for status indicators and labels
 * @param {Object} options - Component configuration
 * @param {string} options.text - Badge text content
 * @param {string} options.variant - 'default'|'primary'|'success'|'warning'|'danger'|'info'
 * @param {string} options.size - 'small'|'medium'|'large'
 * @param {string} options.shape - 'rounded'|'pill'|'square'
 * @param {boolean} options.dismissible - Whether the badge can be dismissed
 * @param {string} options.icon - Icon content (HTML string)
 * @param {string} options.className - Additional CSS classes
 * @param {Object} options.attributes - Additional HTML attributes
 * @param {Function} options.onDismiss - Function called when badge is dismissed
 */
export class Badge {
  constructor(options = {}) {
    this.options = {
      text: 'Badge',
      variant: 'default',
      size: 'medium',
      shape: 'rounded',
      dismissible: false,
      icon: '',
      className: '',
      attributes: {},
      onDismiss: () => {},
      ...options
    };
  }

  render() {
    const badge = document.createElement('span');
    
    // Base classes
    const baseClasses = ['badge'];
    const variantClass = `badge--${this.options.variant}`;
    const sizeClass = `badge--${this.options.size}`;
    const shapeClass = `badge--${this.options.shape}`;
    const dismissibleClass = this.options.dismissible ? 'badge--dismissible' : '';
    
    // Combine all classes
    const allClasses = [
      ...baseClasses,
      variantClass,
      sizeClass,
      shapeClass,
      dismissibleClass,
      this.options.className
    ].filter(Boolean);
    
    badge.className = allClasses.join(' ');
    
    // Add custom attributes
    Object.entries(this.options.attributes).forEach(([key, value]) => {
      badge.setAttribute(key, value);
    });
    
    // Build badge content
    let badgeHTML = '';
    
    // Add icon if provided
    if (this.options.icon) {
      badgeHTML += `<span class="badge__icon">${this.options.icon}</span>`;
    }
    
    // Add text
    badgeHTML += `<span class="badge__text">${this.options.text}</span>`;
    
    // Add dismiss button if dismissible
    if (this.options.dismissible) {
      badgeHTML += `<button class="badge__dismiss" aria-label="Dismiss badge" type="button">×</button>`;
    }
    
    badge.innerHTML = badgeHTML;
    
    // Add dismiss functionality
    if (this.options.dismissible) {
      const dismissButton = badge.querySelector('.badge__dismiss');
      dismissButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.options.onDismiss();
        badge.remove();
      });
    }
    
    return badge;
  }
}

// Export for direct CDN usage
export default Badge;
