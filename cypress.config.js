// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config(); // loads .env into process.env

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    //  Use baseUrl from your .env so you can do cy.visit('/login')
    baseUrl: process.env.TF_BASE_URL,

    //  Make .env vars available in tests via Cypress.env()
    env: {
      TF_EMAIL: process.env.TF_EMAIL,
      TF_PASSWORD: process.env.TF_PASSWORD,
    },
  },
});
