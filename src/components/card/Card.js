/**
 * Card Component
 * A flexible card component with header, body, and footer slots
 * @param {Object} options - Component configuration
 * @param {string} options.title - Card title (optional)
 * @param {string} options.subtitle - Card subtitle (optional)
 * @param {string} options.content - Card body content
 * @param {string} options.footer - Card footer content (optional)
 * @param {string} options.variant - 'default'|'elevated'|'outlined'|'flat'
 * @param {string} options.size - 'small'|'medium'|'large'
 * @param {string} options.className - Additional CSS classes
 * @param {Object} options.attributes - Additional HTML attributes
 */
export class Card {
  constructor(options = {}) {
    this.options = {
      title: '',
      subtitle: '',
      content: '',
      footer: '',
      variant: 'default',
      size: 'medium',
      className: '',
      attributes: {},
      ...options
    };
  }

  render() {
    const card = document.createElement('div');
    
    // Base classes
    const baseClasses = ['card'];
    const variantClass = `card--${this.options.variant}`;
    const sizeClass = `card--${this.options.size}`;
    
    // Combine all classes
    const allClasses = [
      ...baseClasses,
      variantClass,
      sizeClass,
      this.options.className
    ].filter(Boolean);
    
    card.className = allClasses.join(' ');
    
    // Add custom attributes
    Object.entries(this.options.attributes).forEach(([key, value]) => {
      card.setAttribute(key, value);
    });
    
    // Build card structure
    let cardHTML = '';
    
    // Header
    if (this.options.title || this.options.subtitle) {
      cardHTML += '<div class="card__header">';
      if (this.options.title) {
        cardHTML += `<h3 class="card__title">${this.options.title}</h3>`;
      }
      if (this.options.subtitle) {
        cardHTML += `<p class="card__subtitle">${this.options.subtitle}</p>`;
      }
      cardHTML += '</div>';
    }
    
    // Body
    if (this.options.content) {
      cardHTML += `<div class="card__body">${this.options.content}</div>`;
    }
    
    // Footer
    if (this.options.footer) {
      cardHTML += `<div class="card__footer">${this.options.footer}</div>`;
    }
    
    card.innerHTML = cardHTML;
    
    return card;
  }
}

// Export for direct CDN usage
export default Card;
