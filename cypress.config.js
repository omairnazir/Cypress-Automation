const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Fixed the spelling and pointed to the 'cypress/e2e' folder where your file is
    specPattern: 'cypress/e2e/*.js'
  },
});