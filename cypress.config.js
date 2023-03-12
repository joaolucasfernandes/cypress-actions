const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r2b7k3',
  e2e: {
    setupNodeEvents(on, config) {
    on('before:browser:launch', (browser = {}, launchOptions) => {

        if (browser.family === 'firefox') {
          // auto open devtools
          launchOptions.args.push('--disable-gpu')
        }

        return launchOptions
      })
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app"
  }
});
