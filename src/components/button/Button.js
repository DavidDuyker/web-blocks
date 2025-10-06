/**
 * Button Component
 * A simple underlined text link with corner lines animation on hover/focus.
 * 
 * @example
 * ```javascript
 * import { Button } from './Button.js';
 * 
 * const button = new Button({
 *   label: 'Click me',
 *   href: '/some-page',
 *   onClick: () => console.log('clicked')
 * });
 * 
 * document.body.appendChild(button.render());
 * ```
 */
export class Button {
  constructor(props = {}) {
    this.props = {
      label: '',
      disabled: false,
      href: null,
      target: null,
      onClick: null,
      ...props
    };
  }

  /**
   * Renders the button element
   * @returns {HTMLElement} The rendered button element
   */
  render() {
    // Ensure the web component is registered
    this.ensureWebComponentRegistered();
    
    const button = document.createElement('wc-button');
    
    // Set attributes
    if (this.props.href) {
      button.setAttribute('href', this.props.href);
    }
    
    if (this.props.target) {
      button.setAttribute('target', this.props.target);
    }
    
    if (this.props.disabled) {
      button.setAttribute('disabled', '');
    }
    
    // Set content
    button.textContent = this.props.label;
    
    // Add event listeners
    if (this.props.onClick) {
      button.addEventListener('wc-button-click', (event) => {
        this.props.onClick(event.detail.originalEvent);
      });
    }
    
    return button;
  }

  /**
   * Updates the button properties and re-renders
   * @param {Object} newProps - New properties to merge
   */
  update(newProps) {
    this.props = { ...this.props, ...newProps };
    return this;
  }

  /**
   * Ensures the web component is registered
   * @private
   */
  ensureWebComponentRegistered() {
    if (!customElements.get('wc-button')) {
      // Load the HTML file and register the component
      this.loadWebComponent();
    }
  }

  /**
   * Loads and registers the web component from HTML file
   * @private
   */
  loadWebComponent() {
    // Check if already registered
    if (customElements.get('wc-button')) {
      return;
    }

    // For build tools that support importing HTML as text
    try {
      // This will work with Vite and other modern bundlers
      import('./button.html?raw').then(html => {
        this.registerFromHTML(html.default);
      }).catch(() => {
        // Fallback: try to load via fetch
        this.loadWebComponentViaFetch();
      });
    } catch (error) {
      // Fallback: try to load via fetch
      this.loadWebComponentViaFetch();
    }
  }

  /**
   * Fallback method to load web component via fetch
   * @private
   */
  async loadWebComponentViaFetch() {
    try {
      const response = await fetch('./button.html');
      const html = await response.text();
      this.registerFromHTML(html);
    } catch (error) {
      console.error('Failed to load button web component:', error);
      // Create a minimal fallback button
      this.createFallbackButton();
    }
  }

  /**
   * Registers the web component from HTML string
   * @private
   */
  registerFromHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Extract and register the template and script
    const template = tempDiv.querySelector('#wc-button-template');
    const script = tempDiv.querySelector('script');
    
    if (template) {
      document.head.appendChild(template);
    }
    
    if (script) {
      // Execute the script to register the component
      const scriptElement = document.createElement('script');
      scriptElement.textContent = script.textContent;
      document.head.appendChild(scriptElement);
    }
  }

  /**
   * Creates a minimal fallback button if web component fails to load
   * @private
   */
  createFallbackButton() {
    class FallbackButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            .button-link {
              display: inline-block;
              color: #007bff;
              text-decoration: underline;
              cursor: pointer;
            }
          </style>
          <a class="button-link"><slot></slot></a>
        `;
      }
    }
    customElements.define('wc-button', FallbackButton);
  }
}

// Static factory method for convenience
Button.create = (props) => new Button(props);

// Export default for easier importing
export default Button;