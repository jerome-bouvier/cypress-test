describe('google doodle page test', function() {
  it('clicks on archive doodles', function() {
    cy.visit('https://www.google.com/doodles')
    cy.contains('Doodles Archive').click()
    //assertion
    cy.url().should('include','/doodles#archive')
    //get input form and type search
    cy.get('#searchinput')
      .type('woolf')
      .should('have.value','woolf')
    //search
    cy.get('#searchbtn').click()
    //assert page found and loaded
    cy.url().should('include','/doodles?q=woolf')
  })
})