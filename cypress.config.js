const { defineConfig } = require("cypress");
require("dotenv").config(); // ✅ loads .env into process.env

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // ✅ optional but recommended (so you can do cy.visit('/login'))
    //baseUrl: process.env.TF_BASE_URL,

    // ✅ make .env vars available via Cypress.env()
    env: {
      TF_EMAIL: process.env.TF_EMAIL,
      TF_PASSWORD: process.env.TF_PASSWORD,
    },
  },
});
