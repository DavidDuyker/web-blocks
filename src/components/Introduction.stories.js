export default {
  title: 'Introduction/Web Blocks',
  parameters: {
    docs: {
      description: {
        component: 'Welcome to Web Blocks - A collection of reusable web components built with vanilla JavaScript and Web Components API.',
      },
    },
  },
};

export const Welcome = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;

    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #007bff; font-weight: 700;">
          🧱 Web Blocks
        </h1>
        <p style="font-size: 1.25rem; color: #666; margin-bottom: 2rem;">
          A collection of reusable web components built with vanilla JavaScript and Web Components API
        </p>
        <div style="display: inline-block; background: #f8f9fa; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem; color: #6c757d;">
          🚧 Work in Progress
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff;">
          <h3 style="margin-top: 0; color: #007bff;">✅ What's Available Now</h3>
          <ul style="margin: 0; padding-left: 1.2rem;">
            <li>Interactive Storybook playground</li>
            <li>Button component with animations</li>
            <li>Input component with validation</li>
            <li>Design system with CSS tokens</li>
            <li>Accessibility features</li>
          </ul>
        </div>
        
        <div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107;">
          <h3 style="margin-top: 0; color: #856404;">🔮 Coming Soon</h3>
          <ul style="margin: 0; padding-left: 1.2rem;">
            <li>NPM package distribution</li>
            <li>Framework-agnostic usage</li>
            <li>Production-ready components</li>
            <li>More component variants</li>
            <li>Integration guides</li>
          </ul>
        </div>
      </div>

      <div style="background: #e7f3ff; padding: 2rem; border-radius: 8px; margin-bottom: 2rem;">
        <h2 style="margin-top: 0; color: #007bff;">🎯 How to Use This Storybook</h2>
        <ol style="margin: 0; padding-left: 1.5rem;">
          <li><strong>Explore Components:</strong> Use the sidebar to navigate between Button and Input components</li>
          <li><strong>Interactive Controls:</strong> Use the Controls panel to modify component properties in real-time</li>
          <li><strong>View Source:</strong> Check the "Docs" tab to see code examples and API documentation</li>
          <li><strong>Test Accessibility:</strong> Use the Accessibility addon to check for a11y issues</li>
          <li><strong>Background Testing:</strong> Switch between light and dark backgrounds to test component appearance</li>
        </ol>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="text-align: center; padding: 1.5rem; border: 2px solid #e9ecef; border-radius: 8px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎨</div>
          <h4 style="margin: 0 0 0.5rem 0;">Design System</h4>
          <p style="margin: 0; font-size: 0.9rem; color: #666;">CSS custom properties and design tokens for consistent theming</p>
        </div>
        
        <div style="text-align: center; padding: 1.5rem; border: 2px solid #e9ecef; border-radius: 8px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">♿</div>
          <h4 style="margin: 0 0 0.5rem 0;">Accessibility</h4>
          <p style="margin: 0; font-size: 0.9rem; color: #666;">Built with WCAG guidelines and keyboard navigation</p>
        </div>
        
        <div style="text-align: center; padding: 1.5rem; border: 2px solid #e9ecef; border-radius: 8px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
          <h4 style="margin: 0 0 0.5rem 0;">Performance</h4>
          <p style="margin: 0; font-size: 0.9rem; color: #666;">Lightweight vanilla JavaScript with no dependencies</p>
        </div>
      </div>

      <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; text-align: center;">
        <h3 style="margin-top: 0; color: #495057;">Ready to Explore?</h3>
        <p style="margin-bottom: 1rem; color: #6c757d;">
          Start by checking out the Button or Input components in the sidebar →
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="?path=/story/button--default" style="
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: background-color 0.2s;
          " onmouseover="this.style.backgroundColor='#0056b3'" onmouseout="this.style.backgroundColor='#007bff'">
            View Button Component
          </a>
          <a href="?path=/story/input--default" style="
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: #6c757d;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: background-color 0.2s;
          " onmouseover="this.style.backgroundColor='#545b62'" onmouseout="this.style.backgroundColor='#6c757d'">
            View Input Component
          </a>
        </div>
      </div>

      <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 0.9rem;">
        <p style="margin: 0;">
          Built with ❤️ using <a href="https://storybook.js.org/" style="color: #007bff; text-decoration: none;">Storybook</a> and 
          <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" style="color: #007bff; text-decoration: none;">Web Components</a>
        </p>
      </div>
    `;

    return container;
  },
  parameters: {
    docs: {
      source: {
        code: '<!-- This is the home page for Web Blocks Storybook -->',
      },
    },
  },
};
