describe('My Final Automation Test', () => {

    it('Test to verify the Get Started  Now  button ', () => {
        cy.visit('https://orangetesting.com/')
        
       
        cy.contains('Get Started Now').should('be.visible')
          
    })
})