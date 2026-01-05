describe('This is the test for Login functionality', () => {

  it('Test 1: If the page loads correctly and url is valid', () => {
    // Go to visit the Login page
    cy.visit('https://dev.inventory.trailerfunnel.com/login')

    // Check if the url is correct
    cy.url().should('include', 'dev.inventory.trailerfunnel')
  })

  it('Test 2: Login into the Project via Email and Password', () => {
    cy.visit('https://dev.inventory.trailerfunnel.com/login')
    //Here it will wait for the form it load 

    cy.get('form', { timeout: 15000 })
      .should('be.visible')
      .within(() => {

        cy.get('#email', { timeout: 15000 })
          .should('be.visible')
          //Here ENV concept is being used , means no hardcoding 
          .type(Cypress.env('TF_EMAIL'))

        cy.get('#password')
          .should('be.visible')
          .type(Cypress.env('TF_PASSWORD'), { log: false })
        // Here at this stage , the login has been done but not fully confirmed 

        cy.get('button[type="submit"]').click()
      })
    //Verify success 
    cy.url({ timeout: 2000 }).should('not.include', 'login')
  })

})
