

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/components/Introduction.stories.js",
    "../src/components/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "outputDir": "../storybook-static",
  "features": {
    "buildStoriesJson": true
  },
  "docs": {
    "defaultName": "Docs"
  }
};
export default config;