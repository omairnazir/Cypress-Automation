describe('My First Automation Tests', () => {

  it('Test 1: Check if the website loads correctly', () => {
    // 1. Go to the website
    cy.visit('https://orangetesting.com/')

    // 2. Check if the URL is correct
    cy.url().should('include', 'orangetesting')
  })

  it('Test 2: Check if the Schedule button is visible', () => {
    // 1. Go to the website
    cy.visit('https://orangetesting.com/')

    // 2. Find the button with text "Schedule a presentation" and check if we can see it
    cy.contains('Schedule a presentation').should('be.visible')
  })

})