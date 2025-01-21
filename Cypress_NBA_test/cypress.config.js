const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {baseUrl: 'https://www.nba.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Implement event listeners if needed
    },
  },
});
