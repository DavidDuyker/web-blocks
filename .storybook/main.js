const config = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {
      viteConfigPath: './vite.config.js', // Use custom Vite config
    }
  },
  outputDir: "../storybook-static",
  features: {
    buildStoriesJson: true
  },
  docs: {
    defaultName: "Docs",
    autodocs: true 
  },
  core: {
    disableTelemetry: true,
  },
  managerHead: (head) => `
    ${head}
    <title>web blocks</title>
  `,
};

export default config;