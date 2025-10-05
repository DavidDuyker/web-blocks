import { Badge } from './Badge.js';
import './Badge.css';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A flexible badge component for status indicators, labels, and notifications. Perfect for displaying counts, status, and short text labels.',
      },
    },
  },
  argTypes: {
    text: { 
      control: 'text',
      description: 'The text content of the badge'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      description: 'The color variant of the badge'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the badge'
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square'],
      description: 'The shape of the badge'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the badge can be dismissed'
    },
    icon: {
      control: 'text',
      description: 'Icon content (HTML string)'
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Function called when badge is dismissed'
    },
  },
};

export const Default = {
  args: {
    text: 'Badge',
    variant: 'default',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const Primary = {
  args: {
    text: 'Primary',
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const Success = {
  args: {
    text: 'Success',
    variant: 'success',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const Warning = {
  args: {
    text: 'Warning',
    variant: 'warning',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const Danger = {
  args: {
    text: 'Danger',
    variant: 'danger',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const Info = {
  args: {
    text: 'Info',
    variant: 'info',
    size: 'medium',
    shape: 'rounded',
    dismissible: false,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '24px';
    
    ['default', 'primary', 'success', 'warning', 'danger', 'info'].forEach(variant => {
      const badge = new Badge({ 
        text: variant.charAt(0).toUpperCase() + variant.slice(1),
        variant,
        size: 'medium',
        shape: 'rounded'
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge component in all available variants.',
      },
    },
  },
};

export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.alignItems = 'center';
    container.style.padding = '24px';
    
    ['small', 'medium', 'large'].forEach(size => {
      const badge = new Badge({ 
        text: size.charAt(0).toUpperCase() + size.slice(1),
        variant: 'primary',
        size,
        shape: 'rounded'
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge component in all available sizes.',
      },
    },
  },
};

export const AllShapes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.alignItems = 'center';
    container.style.padding = '24px';
    
    ['rounded', 'pill', 'square'].forEach(shape => {
      const badge = new Badge({ 
        text: shape.charAt(0).toUpperCase() + shape.slice(1),
        variant: 'primary',
        size: 'medium',
        shape
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge component in all available shapes.',
      },
    },
  },
};

export const WithIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '24px';
    
    const badges = [
      { text: 'New', icon: '✨', variant: 'success' },
      { text: 'Updated', icon: '🔄', variant: 'info' },
      { text: 'Hot', icon: '🔥', variant: 'danger' },
      { text: 'Sale', icon: '💰', variant: 'warning' }
    ];
    
    badges.forEach(({ text, icon, variant }) => {
      const badge = new Badge({ 
        text,
        icon,
        variant,
        size: 'medium',
        shape: 'rounded'
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge component with icons.',
      },
    },
  },
};

export const Dismissible = {
  args: {
    text: 'Dismissible Badge',
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    dismissible: true,
    icon: '',
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible badge that can be closed by clicking the × button.',
      },
    },
  },
};

export const Notification = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.alignItems = 'center';
    container.style.padding = '24px';
    
    const badges = [
      { text: '3', variant: 'danger', className: 'badge--notification' },
      { text: 'New', variant: 'primary', className: 'badge--notification' },
      { text: '99+', variant: 'warning', className: 'badge--notification' }
    ];
    
    badges.forEach(({ text, variant, className }) => {
      const badge = new Badge({ 
        text,
        variant,
        size: 'medium',
        shape: 'pill',
        className
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Notification badges with pulsing animation.',
      },
    },
  },
};

export const StatusIndicators = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.alignItems = 'center';
    container.style.padding = '24px';
    
    const statuses = [
      { text: 'Online', variant: 'success' },
      { text: 'Offline', variant: 'default' },
      { text: 'Busy', variant: 'danger' },
      { text: 'Away', variant: 'warning' }
    ];
    
    statuses.forEach(({ text, variant }) => {
      const badge = new Badge({ 
        text,
        variant,
        size: 'medium',
        shape: 'pill'
      });
      container.appendChild(badge.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Status indicator badges for user presence.',
      },
    },
  },
};
