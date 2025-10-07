/**
 * Link Component - Standalone Version
 * A standalone link component with variants: "inline" and "crosshair".
 * 
 * This is a standalone version that can be imported with a single script tag
 * in vanilla HTML, CSS, and JS websites.
 * 
 * @example
 * ```html
 * <script src="link-standalone.js"></script>
 * <script>
 *   // Direct web component usage
 *   const link1 = document.createElement('wc-link');
 *   link1.textContent = 'Inline Link';
 *   link1.setAttribute('href', 'https://example.com');
 *   link1.setAttribute('variant', 'inline');
 *   document.body.appendChild(link1);
 * 
 *   // Using the Link class
 *   const link2 = new Link({
 *     label: 'Crosshair Link',
 *     href: '/about',
 *     variant: 'crosshair'
 *   });
 *   document.body.appendChild(link2.render());
 * </script>
 * ```
 */

// CSS Variables
const CSS_VARIABLES = `
  :root {
    --color-primary:rgb(45, 45, 45);
    --color-primary-hover:rgb(187, 214, 255);
    --hover-corners: #0066ff;
  }
`;

// Link Web Component Styles
const LINK_STYLES = `
  :host {
    --link-color: var(--color-primary,rgb(84, 84, 84));
    --link-background-hover: var(--color-primary-hover,rgb(182, 211, 255));
    --corner-color: var(--color-primary);
  }

  .link {
    position: relative;
    display: inline-block;
    color: var(--link-color);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
    cursor: pointer;
    font: inherit;
    background: none;
    border: 0;
    padding: 0 4px;
    margin: 0 -4px;
    border-radius: 4px;
    transition: color 200ms ease;
  }

  .link:hover,
  .link:focus {
    background-color: var(--link-background-hover);
    color: var(--link-color);
    outline: none;
  }

  /* inline variant: minimalist underline that tightens on hover */
  .link--inline {
    text-decoration: underline;
  }

  /* crosshair variant: animated corner lines on hover/focus */
  .CornerLinesWrapper {
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    pointer-events: none;
    opacity: 0;
    transition: opacity 350ms ease;
  }

  .link--crosshair:hover .CornerLinesWrapper,
  .link--crosshair:focus .CornerLinesWrapper {
    opacity: 1;
  }

  .CornerLinesWrapper span {
    position: absolute;
    border: 1px solid var(--corner-color);
    width: 8px;
    height: 8px;
  }

  .CornerLinesTopLeft { 
    top: -1px; 
    left: -1px; 
    border-bottom: none; 
    border-right: none; 
    border-top-left-radius: 4px; 
  }
  
  .CornerLinesTopRight { 
    top: -1px; 
    right: -1px; 
    border-bottom: none; 
    border-left: none; 
    border-top-right-radius: 4px; 
  }
  
  .CornerLinesBottomLeft { 
    bottom: -1px; 
    left: -1px; 
    border-top: none; 
    border-right: none; 
    border-bottom-left-radius: 4px; 
  }
  
  .CornerLinesBottomRight { 
    bottom: -1px; 
    right: -1px; 
    border-top: none; 
    border-left: none; 
    border-bottom-right-radius: 4px; 
  }
`;

/**
 * Link Web Component
 * A standalone link component with variants: "inline" and "crosshair".
 */
class WcLink extends HTMLElement {
  static get observedAttributes() {
    return ['href', 'target', 'variant'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${LINK_STYLES}</style>
      <a class="link link--inline">
        <slot></slot>
      </a>
    `;
  }

  connectedCallback() {
    this.updateLink();
    this.setupCornerLines();
  }

  attributeChangedCallback() {
    this.updateLink();
  }

  updateLink() {
    const link = this.shadowRoot.querySelector('.link');
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const variant = (this.getAttribute('variant') || 'inline').toLowerCase();

    // classes
    const classes = ['link'];
    if (variant === 'crosshair') {
      classes.push('link--crosshair');
    } else {
      classes.push('link--inline');
    }
    link.className = classes.join(' ');

    // attributes
    if (href) link.href = href;
    if (target) link.target = target;
  }

  setupCornerLines() {
    const link = this.shadowRoot.querySelector('.link');
    if (this.shadowRoot.querySelector('.CornerLinesWrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'CornerLinesWrapper';

    const tl = document.createElement('span'); 
    tl.className = 'CornerLinesTopLeft';
    const tr = document.createElement('span'); 
    tr.className = 'CornerLinesTopRight';
    const bl = document.createElement('span'); 
    bl.className = 'CornerLinesBottomLeft';
    const br = document.createElement('span'); 
    br.className = 'CornerLinesBottomRight';

    wrapper.appendChild(tl);
    wrapper.appendChild(tr);
    wrapper.appendChild(bl);
    wrapper.appendChild(br);

    link.appendChild(wrapper);
  }
}

/**
 * Link JavaScript Class
 * A wrapper class for easier programmatic usage
 * 
 * @example
 * ```javascript
 * const link = new Link({
 *   label: 'Click me',
 *   href: '/some-page',
 *   variant: 'crosshair'
 * });
 * 
 * document.body.appendChild(link.render());
 * ```
 */
class Link {
  constructor(props = {}) {
    this.props = {
      label: '',
      href: null,
      target: null,
      variant: 'inline', // 'inline' | 'crosshair'
      ...props
    };
  }

  render() {
    const link = document.createElement('wc-link');
    
    // Set attributes
    if (this.props.href) {
      link.setAttribute('href', this.props.href);
    }
    
    if (this.props.target) {
      link.setAttribute('target', this.props.target);
    }
    
    if (this.props.variant) {
      link.setAttribute('variant', this.props.variant);
    }
    
    // Set content
    link.textContent = this.props.label;
    
    return link;
  }

  /**
   * Updates the link properties and re-renders
   * @param {Object} newProps - New properties to merge
   */
  update(newProps) {
    this.props = { ...this.props, ...newProps };
    return this;
  }
}

// Static factory method for convenience
Link.create = (props) => new Link(props);

// Initialize the component when the script loads
(function() {
  // Add CSS variables to the document head
  const style = document.createElement('style');
  style.textContent = CSS_VARIABLES;
  document.head.appendChild(style);

  // Register the web component
  if (!customElements.get('wc-link')) {
    customElements.define('wc-link', WcLink);
  }

  // Make Link class available globally
  if (typeof window !== 'undefined') {
    window.Link = Link;
  }

  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Link };
  }
})();
