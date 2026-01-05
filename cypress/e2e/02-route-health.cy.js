// Suite goal: Login first, then verify each module URL loads by checking the URL contains the expected path.
// Functions used: beforeEach() for repeating login, Cypress.env() for credentials, cy.visit() to open pages, cy.get() to type/click, cy.url() with timeout to confirm page load.

describe('Route Health - pages load after login', () => {

  beforeEach(() => {
    // Login flow runs before every test so each test starts in an authenticated state.
    cy.visit('/login')

    cy.get('#email', { timeout: 15000 }).type(Cypress.env('TF_EMAIL'))
    cy.get('#password', { timeout: 15000 }).type(Cypress.env('TF_PASSWORD'), { log: false })

    cy.get('button[type="submit"]').click()

    // Confirm we landed on Inventory Manager after login.
    cy.url({ timeout: 15000 }).should('include', '/inventory-manager')
  })

  it('TC-01 - Verify that Scheduler page loads', () => {
    // Navigate to Scheduler and confirm it loads by checking the URL.
    cy.visit('/scheduler/')
    cy.url({ timeout: 15000 }).should('include', '/scheduler')
  })

  it('TC-02 - Verify that Craigslist Post page loads', () => {
    // Navigate to Craigslist Post and confirm it loads by checking the URL.
    cy.visit('/scheduler/craigslist/post')
    cy.url({ timeout: 15000 }).should('include', '/scheduler/craigslist/post')
  })

  it('TC-03 - Verify that Craigslist Scheduled page loads', () => {
    // Navigate to Craigslist Scheduled and confirm it loads by checking the URL.
    cy.visit('/scheduler/craigslist/scheduled')
    cy.url({ timeout: 15000 }).should('include', '/scheduler/craigslist/scheduled')
  })

  it('TC-04 - Verify that Craigslist Profiles page loads', () => {
    // Navigate to Craigslist Profiles and confirm it loads by checking the URL.
    cy.visit('/scheduler/craigslist/profiles')
    cy.url({ timeout: 15000 }).should('include', '/scheduler/craigslist/profiles')
  })

  it('TC-05 - Verify that Facebook Scheduled page loads', () => {
    // Navigate to Facebook Scheduled and confirm it loads by checking the URL.
    cy.visit('/scheduler/facebook/scheduled')
    cy.url({ timeout: 15000 }).should('include', '/scheduler/facebook/scheduled')
  })

  it('TC-06 - Verify that Facebook Profiles page loads', () => {
    // Navigate to Facebook Profiles and confirm it loads by checking the URL.
    cy.visit('/scheduler/facebook/fb-profiles')
    cy.url({ timeout: 15000 }).should('include', '/scheduler/facebook/fb-profiles')
  })

  it('TC-07 - Verify that Billing Add Funds page loads', () => {
    // Navigate to Billing Add Funds and confirm it loads by checking the URL.
    cy.visit('/billing/add-funds')
    cy.url({ timeout: 15000 }).should('include', '/billing/add-funds')
  })

  it('TC-08 - Verify that Billing History page loads', () => {
    // Navigate to Billing History and confirm it loads by checking the URL.
    cy.visit('/billing/history')
    cy.url({ timeout: 15000 }).should('include', '/billing/history')
  })

  it('TC-09 - Verify that Settings Location page loads', () => {
    // Navigate to Settings Location and confirm it loads by checking the URL.
    cy.visit('/settings/location')
    cy.url({ timeout: 15000 }).should('include', '/settings/location')
  })

  it('TC-10 - Verify that Settings Users page loads', () => {
    // Navigate to Settings Users and confirm it loads by checking the URL.
    cy.visit('/settings/users')
    cy.url({ timeout: 15000 }).should('include', '/settings/users')
  })

  it('TC-11 - Verify that Settings CSV page loads', () => {
    // Navigate to Settings CSV and confirm it loads by checking the URL.
    cy.visit('/settings/csv')
    cy.url({ timeout: 15000 }).should('include', '/settings/csv')
  })

  it('TC-12 - Verify that Settings Integrations page loads', () => {
    // Navigate to Settings Integrations and confirm it loads by checking the URL.
    cy.visit('/settings/integrations')
    cy.url({ timeout: 15000 }).should('include', '/settings/integrations')
  })

  it('TC-13 - Verify that Settings Text Overlay page loads', () => {
    // Navigate to Settings Text Overlay and confirm it loads by checking the URL.
    cy.visit('/settings/text-overlay')
    cy.url({ timeout: 15000 }).should('include', '/settings/text-overlay')
  })

  it('TC-14 - Verify that Settings Custom Status page loads', () => {
    // Navigate to Settings Custom Status and confirm it loads by checking the URL.
    cy.visit('/settings/custom-status')
    cy.url({ timeout: 15000 }).should('include', '/settings/custom-status')
  })

  it('TC-15 - Verify that Settings Image Overlay page loads', () => {
    // Navigate to Settings Image Overlay and confirm it loads by checking the URL.
    cy.visit('/settings/image-overlay')
    cy.url({ timeout: 15000 }).should('include', '/settings/image-overlay')
  })

  it('TC-16 - Verify that Settings Image Placeholder page loads', () => {
    // Navigate to Settings Image Placeholder and confirm it loads by checking the URL.
    cy.visit('/settings/image-placeholder')
    cy.url({ timeout: 15000 }).should('include', '/settings/image-placeholder')
  })

})
