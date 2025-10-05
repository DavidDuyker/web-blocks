import { Card } from './Card.js';
import './Card.css';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A flexible card component with header, body, and footer sections. Perfect for displaying content in organized, visually appealing containers.',
      },
    },
  },
  argTypes: {
    title: { 
      control: 'text',
      description: 'The title of the card'
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the card'
    },
    content: {
      control: 'text',
      description: 'The main content of the card'
    },
    footer: {
      control: 'text',
      description: 'The footer content of the card'
    },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'flat'],
      description: 'The visual style variant of the card'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the card'
    },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle or description',
    content: 'This is the main content of the card. It can contain any HTML content including text, images, and other elements.',
    footer: 'Card footer content',
    variant: 'default',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Card',
    subtitle: 'With shadow and depth',
    content: 'This card has an elevated appearance with a prominent shadow.',
    footer: 'Elevated footer',
    variant: 'elevated',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
};

export const Outlined = {
  args: {
    title: 'Outlined Card',
    subtitle: 'With border emphasis',
    content: 'This card has a prominent border instead of a shadow.',
    footer: 'Outlined footer',
    variant: 'outlined',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
};

export const Flat = {
  args: {
    title: 'Flat Card',
    subtitle: 'Minimal design',
    content: 'This card has a flat design with no shadows or borders.',
    footer: 'Flat footer',
    variant: 'flat',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    container.style.gap = '24px';
    container.style.padding = '24px';
    
    ['default', 'elevated', 'outlined', 'flat'].forEach(variant => {
      const card = new Card({ 
        title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Card`,
        subtitle: `This is a ${variant} card variant`,
        content: `Content for the ${variant} card. Each variant has its own visual style and behavior.`,
        footer: `${variant.charAt(0).toUpperCase() + variant.slice(1)} footer`,
        variant,
        size: 'medium'
      });
      container.appendChild(card.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Card component in all available variants.',
      },
    },
  },
};

export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.padding = '24px';
    
    ['small', 'medium', 'large'].forEach(size => {
      const card = new Card({ 
        title: `${size.charAt(0).toUpperCase() + size.slice(1)} Card`,
        subtitle: `This is a ${size} card`,
        content: `Content for the ${size} card. The size affects the maximum width of the card.`,
        footer: `${size.charAt(0).toUpperCase() + size.slice(1)} footer`,
        variant: 'default',
        size
      });
      container.appendChild(card.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Card component in all available sizes.',
      },
    },
  },
};

export const ContentOnly = {
  args: {
    content: 'This card has no header or footer, just content. Perfect for simple content display.',
    variant: 'default',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with only content, no header or footer.',
      },
    },
  },
};

export const TitleOnly = {
  args: {
    title: 'Card with Title Only',
    content: 'This card has a title but no subtitle or footer.',
    variant: 'default',
    size: 'medium',
  },
  render: (args) => {
    const card = new Card(args);
    return card.render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with title and content, no subtitle or footer.',
      },
    },
  },
};
