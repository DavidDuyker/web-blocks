import { Button } from './Button.js';
import './Button.css';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A flexible button component with multiple variants, sizes, and states. Perfect for forms, navigation, and interactive elements.',
      },
    },
  },
  argTypes: {
    label: { 
      control: 'text',
      description: 'The text content of the button'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type'
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked'
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const Ghost = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const Danger = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
  render: (args) => {
    const btn = new Button(args);
    return btn.render();
  },
};

export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    
    ['small', 'medium', 'large'].forEach(size => {
      const btn = new Button({ 
        label: `${size.charAt(0).toUpperCase() + size.slice(1)} Button`, 
        size,
        variant: 'primary'
      });
      container.appendChild(btn.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component in all available sizes.',
      },
    },
  },
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    
    ['primary', 'secondary', 'ghost', 'danger'].forEach(variant => {
      const btn = new Button({ 
        label: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`, 
        variant,
        size: 'medium'
      });
      container.appendChild(btn.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component in all available variants.',
      },
    },
  },
};

export const Disabled = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    
    ['primary', 'secondary', 'ghost', 'danger'].forEach(variant => {
      const btn = new Button({ 
        label: `Disabled ${variant.charAt(0).toUpperCase() + variant.slice(1)}`, 
        variant,
        size: 'medium',
        disabled: true
      });
      container.appendChild(btn.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component in disabled state for all variants.',
      },
    },
  },
};

export const Interactive = {
  args: {
    label: 'Click me!',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
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
        story: 'Interactive button with click handler. Check the Actions tab to see click events.',
      },
    },
  },
};
