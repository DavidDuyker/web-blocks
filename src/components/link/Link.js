/**
 * Link Component
 * A standalone link component with variants: "inline" and "crosshair".
 * Mirrors the loading/registration pattern used by Button.
 */
export class Link {
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
    this.ensureWebComponentRegistered();

    const el = document.createElement('wc-link');

    if (this.props.href) {
      el.setAttribute('href', this.props.href);
    }
    if (this.props.target) {
      el.setAttribute('target', this.props.target);
    }
    if (this.props.variant) {
      el.setAttribute('variant', this.props.variant);
    }

    el.textContent = this.props.label;
    return el;
  }

  update(newProps) {
    this.props = { ...this.props, ...newProps };
    return this;
  }

  ensureWebComponentRegistered() {
    if (!customElements.get('wc-link')) {
      this.loadWebComponent();
    }
  }

  loadWebComponent() {
    if (customElements.get('wc-link')) return;

    try {
      import('./link.html?raw').then(html => {
        this.registerFromHTML(html.default);
      }).catch(() => {
        this.loadWebComponentViaFetch();
      });
    } catch (e) {
      this.loadWebComponentViaFetch();
    }
  }

  async loadWebComponentViaFetch() {
    try {
      const response = await fetch('./link.html');
      const html = await response.text();
      this.registerFromHTML(html);
    } catch (error) {
      console.error('Failed to load link web component:', error);
    }
  }

  registerFromHTML(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const template = temp.querySelector('#wc-link-template');
    const script = temp.querySelector('script');

    if (template) document.head.appendChild(template);
    if (script) {
      const s = document.createElement('script');
      s.textContent = script.textContent;
      document.head.appendChild(s);
    }
  }
}

Link.create = (props) => new Link(props);
export default Link;


