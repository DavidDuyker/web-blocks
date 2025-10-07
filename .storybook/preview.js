import '../src/styles/tokens.css';
import '../src/styles/reset.css';

import { themes } from 'storybook/theming';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      toc: true,
      theme: themes.dark,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  initialGlobals: {
    backgrounds: {value: 'light'},
  },
};