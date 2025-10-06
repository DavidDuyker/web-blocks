import '../src/styles/tokens.css';
import '../src/styles/reset.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Introduction', 'Link', 'Button', 'Input'],
      },
    },
  },
};