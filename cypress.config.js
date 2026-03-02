/** @type {import('cypress').Cypress.Config} */

// obtain port or full URL from environment so our tests can run regardless of
// which port Next.js chooses (3000, 3001, etc.).
const port = process.env.PORT || 3000;
const baseUrl = process.env.APP_URL || `http://localhost:${port}`;

module.exports = {
  e2e: {
    baseUrl,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
};
