import { Button } from '../components/button/Button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'development',
    },
    docs: {
      description: {
        component: 'A simple underlined text link with animated corner lines on hover/focus. Perfect for navigation and interactive text elements.',
      },
    },
  },
  argTypes: {
    label: { 
      control: 'text',
      description: 'The text content of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    href: {
      control: 'text',
      description: 'The href attribute for the button link'
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'The target attribute for the button link'
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked'
    },
  },
};

export const Default = {
  args: {
    label: 'Click me',
    disabled: false,
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const WithLink = {
  args: {
    label: 'Visit our website',
    href: 'https://example.com',
    target: '_blank',
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const Disabled = {
  args: {
    label: 'Disabled link',
    disabled: true,
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const Interactive = {
  args: {
    label: 'Click me!',
    disabled: false,
  },
  render: (args) => {
    const btn = new Button({
      ...args,
      onClick: () => {
        alert('Button clicked!');
      }
    });
    return btn.render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button with click handler. Hover over the button to see the corner lines animation. Check the Actions tab to see click events.',
      },
    },
  },
};

export const CornerLinesDemo = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f8f9fa';
    container.style.borderRadius = '8px';
    
    const title = document.createElement('h3');
    title.textContent = 'Hover over the links below to see the corner lines animation';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    
    const linkContainer = document.createElement('div');
    linkContainer.style.display = 'flex';
    linkContainer.style.gap = '20px';
    linkContainer.style.flexWrap = 'wrap';
    
    const examples = [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
      { label: 'Services' },
    ];
    
    examples.forEach(example => {
      const btn = new Button(example);
      linkContainer.appendChild(btn.render());
    });
    
    container.appendChild(title);
    container.appendChild(linkContainer);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the corner lines animation effect. Hover over each link to see the animated corner lines appear.',
      },
    },
  },
};

export const NavigationExample = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#ffffff';
    container.style.borderRadius = '8px';
    container.style.border = '1px solid #e9ecef';
    
    const title = document.createElement('h2');
    title.textContent = 'Navigation Menu';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    title.style.fontSize = '24px';
    
    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.gap = '24px';
    nav.style.flexWrap = 'wrap';
    nav.style.alignItems = 'center';
    
    const links = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ];
    
    links.forEach(link => {
      const btn = new Button(link);
      nav.appendChild(btn.render());
    });
    
    container.appendChild(title);
    container.appendChild(nav);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how the button component can be used in a navigation menu. Each link has the corner lines animation on hover.',
      },
    },
  },
};