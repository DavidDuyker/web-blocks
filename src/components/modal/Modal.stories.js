import { Modal } from './Modal.js';
import './Modal.css';

export default {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A flexible modal component with overlay, dialog, and accessibility features. Perfect for dialogs, forms, and content overlays.',
      },
    },
  },
  argTypes: {
    title: { 
      control: 'text',
      description: 'The title of the modal'
    },
    content: {
      control: 'text',
      description: 'The main content of the modal'
    },
    footer: {
      control: 'text',
      description: 'The footer content of the modal'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'The size of the modal'
    },
    closable: {
      control: 'boolean',
      description: 'Whether the modal can be closed'
    },
    backdrop: {
      control: 'boolean',
      description: 'Whether to show backdrop'
    },
    onOpen: {
      action: 'opened',
      description: 'Function called when modal is opened'
    },
    onClose: {
      action: 'closed',
      description: 'Function called when modal is closed'
    },
  },
};

export const Default = {
  args: {
    title: 'Modal Title',
    content: 'This is the modal content. It can contain any HTML content including text, images, and other elements.',
    footer: 'Modal footer content',
    size: 'medium',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    // Add open button for demo
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const Small = {
  args: {
    title: 'Small Modal',
    content: 'This is a small modal with limited content.',
    footer: 'Small footer',
    size: 'small',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Small Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const Large = {
  args: {
    title: 'Large Modal',
    content: 'This is a large modal with more content. It can contain forms, tables, or other complex content. The modal will automatically handle scrolling if the content exceeds the viewport height.',
    footer: 'Large modal footer with more content',
    size: 'large',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Large Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const Fullscreen = {
  args: {
    title: 'Fullscreen Modal',
    content: 'This is a fullscreen modal that takes up the entire viewport. Perfect for complex forms or detailed content.',
    footer: 'Fullscreen footer',
    size: 'fullscreen',
    closable: true,
    backdrop: false,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Fullscreen Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const WithoutTitle = {
  args: {
    content: 'This modal has no title, just content and footer.',
    footer: 'Footer without title',
    size: 'medium',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Modal Without Title';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const WithoutFooter = {
  args: {
    title: 'Modal Without Footer',
    content: 'This modal has no footer, just title and content.',
    size: 'medium',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Modal Without Footer';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const ContentOnly = {
  args: {
    content: 'This modal has only content, no title or footer.',
    size: 'medium',
    closable: true,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Content Only Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const NonClosable = {
  args: {
    title: 'Non-Closable Modal',
    content: 'This modal cannot be closed by clicking the backdrop or close button. It must be closed programmatically.',
    footer: 'Non-closable footer',
    size: 'medium',
    closable: false,
    backdrop: true,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Non-Closable Modal';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close Modal Programmatically';
    closeButton.className = 'btn btn--secondary';
    closeButton.addEventListener('click', () => modal.close());
    
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '12px';
    wrapper.appendChild(openButton);
    wrapper.appendChild(closeButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const WithoutBackdrop = {
  args: {
    title: 'Modal Without Backdrop',
    content: 'This modal has no backdrop, so you can interact with the content behind it.',
    footer: 'No backdrop footer',
    size: 'medium',
    closable: true,
    backdrop: false,
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = modal.render();
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open Modal Without Backdrop';
    openButton.className = 'btn btn--primary';
    openButton.addEventListener('click', () => modal.open());
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(openButton);
    wrapper.appendChild(container);
    
    return wrapper;
  },
};

export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '24px';
    
    ['small', 'medium', 'large', 'fullscreen'].forEach(size => {
      const modal = new Modal({ 
        title: `${size.charAt(0).toUpperCase() + size.slice(1)} Modal`,
        content: `This is a ${size} modal.`,
        footer: `${size.charAt(0).toUpperCase() + size.slice(1)} footer`,
        size,
        closable: true,
        backdrop: true
      });
      
      const modalContainer = modal.render();
      
      const openButton = document.createElement('button');
      openButton.textContent = `Open ${size.charAt(0).toUpperCase() + size.slice(1)}`;
      openButton.className = 'btn btn--primary';
      openButton.addEventListener('click', () => modal.open());
      
      const buttonContainer = document.createElement('div');
      buttonContainer.appendChild(openButton);
      buttonContainer.appendChild(modalContainer);
      
      container.appendChild(buttonContainer);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal component in all available sizes.',
      },
    },
  },
};
