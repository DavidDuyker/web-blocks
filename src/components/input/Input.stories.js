import { Input } from './Input.js';
import './Input.css';

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'stable',
    },
    docs: {
      description: {
        component: 'A flexible input component with validation states, various input types, and accessibility features.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The HTML input type'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input'
    },
    value: {
      control: 'text',
      description: 'Initial value of the input'
    },
    label: {
      control: 'text',
      description: 'Label text for the input'
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input'
    },
    errorText: {
      control: 'text',
      description: 'Error text to display'
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: 'The validation state of the input'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required'
    },
    onChange: {
      action: 'changed',
      description: 'Function called when input value changes'
    },
    onFocus: {
      action: 'focused',
      description: 'Function called when input receives focus'
    },
    onBlur: {
      action: 'blurred',
      description: 'Function called when input loses focus'
    },
  },
};

export const Default = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    label: 'Text Input',
    helperText: 'This is helper text',
    state: 'default',
    size: 'medium',
    disabled: false,
    required: false,
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    helperText: 'We\'ll never share your email',
    state: 'default',
    size: 'medium',
    required: true,
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    helperText: 'Must be at least 8 characters',
    state: 'default',
    size: 'medium',
    required: true,
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Error = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    label: 'Input with Error',
    errorText: 'This field is required',
    state: 'error',
    size: 'medium',
    required: true,
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Success = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    label: 'Valid Input',
    helperText: 'Looks good!',
    state: 'success',
    size: 'medium',
    value: 'Valid input',
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Warning = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    label: 'Input with Warning',
    helperText: 'Please review your input',
    state: 'warning',
    size: 'medium',
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const AllStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.padding = '24px';
    
    ['default', 'error', 'success', 'warning'].forEach(state => {
      const input = new Input({ 
        type: 'text',
        label: `${state.charAt(0).toUpperCase() + state.slice(1)} State`,
        placeholder: `Input in ${state} state`,
        helperText: state === 'error' ? 'This is an error message' : 
                   state === 'success' ? 'This looks good!' :
                   state === 'warning' ? 'Please review this' :
                   'This is helper text',
        state,
        size: 'medium'
      });
      container.appendChild(input.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Input component in all validation states.',
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
      const input = new Input({ 
        type: 'text',
        label: `${size.charAt(0).toUpperCase() + size.slice(1)} Input`,
        placeholder: `This is a ${size} input`,
        helperText: `${size.charAt(0).toUpperCase() + size.slice(1)} size input`,
        size,
        state: 'default'
      });
      container.appendChild(input.render());
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Input component in all available sizes.',
      },
    },
  },
};

export const Disabled = {
  args: {
    type: 'text',
    placeholder: 'This input is disabled',
    label: 'Disabled Input',
    helperText: 'This input cannot be edited',
    state: 'default',
    size: 'medium',
    disabled: true,
    value: 'Disabled value',
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Required = {
  args: {
    type: 'text',
    placeholder: 'This field is required',
    label: 'Required Field',
    helperText: 'This field is mandatory',
    state: 'default',
    size: 'medium',
    required: true,
  },
  render: (args) => {
    const input = new Input(args);
    return input.render();
  },
};

export const Interactive = {
  args: {
    type: 'text',
    placeholder: 'Type something...',
    label: 'Interactive Input',
    helperText: 'Watch the Actions tab for events',
    state: 'default',
    size: 'medium',
  },
  render: (args) => {
    const input = new Input({
      ...args,
      onChange: (e) => {
        console.log('Input changed:', e.target.value);
      },
      onFocus: () => console.log('Input focused'),
      onBlur: () => console.log('Input blurred')
    });
    return input.render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive input with event handlers. Check the Actions tab to see events.',
      },
    },
  },
};
