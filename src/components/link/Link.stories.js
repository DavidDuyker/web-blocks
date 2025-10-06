import { Link } from './Link.js';

export default {
  title: 'Components/Link',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A standalone link component with variants for inline and crosshair styles.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The text content of the link' },
    href: { control: 'text', description: 'The href attribute for the link' },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'The target attribute for the link'
    },
    variant: {
      control: 'inline-radio',
      options: ['inline', 'crosshair'],
      description: 'Visual variant of the link'
    },
  },
};

export const Inline = {
  args: {
    label: 'Inline link',
    href: '#',
    variant: 'inline',
  },
  render: (args) => {
    const link = new Link(args);
    return link.render();
  },
};

export const Crosshair = {
  args: {
    label: 'Crosshair link',
    href: '#',
    variant: 'crosshair',
  },
  render: (args) => {
    const link = new Link(args);
    return link.render();
  },
};

export const Gallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.flexWrap = 'wrap';

    const examples = [
      { label: 'Home', href: '#', variant: 'inline' },
      { label: 'About', href: '#', variant: 'crosshair' },
      { label: 'Contact', href: '#', variant: 'inline' },
      { label: 'Services', href: '#', variant: 'crosshair' },
    ];

    examples.forEach(props => {
      const link = new Link(props);
      container.appendChild(link.render());
    });

    return container;
  },
};


