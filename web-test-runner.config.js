process.env.NODE_ENV = 'test';
const { vitePlugin } = require('@remcovaes/web-test-runner-vite-plugin');
const { playwrightLauncher } = require('@web/test-runner-playwright');

module.exports = {
  files: 'src/**/*.test.tsx',
  nodeResolve: true,
  
  coverageConfig: {
    exclude: ['**/node_modules/**', '**/build/**'],
  },
  
  plugins: [
    vitePlugin(),
  ],
  
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
  ],
  
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: 5000,
    },
  },
};
