describe('test route2', () => {
  it('tests array stubbing', () => {
    cy.visit('/beetles')
    cy.route2('/beetles', []).as('getBeetles')
    cy.get('#search').type('Weevil')

    // wait for the first response to finish
    cy.wait('@getBeetles')

    // the results should be empty because we
    // responded with an empty array first
    cy.get('#beetle-results').should('be.empty')

    // now re-define the /beetles response
    cy.route2('/beetles', [{ name: 'Geotrupidae' }])

    cy.get('#search').type('Geotrupidae')

    // now when we wait for 'getBeetles' again, Cypress will
    // automatically know to wait for the 2nd response
    cy.wait('@getBeetles')

    // we responded with 1 beetle item so now we should
    // have one result
    cy.get('#beetle-results').should('have.length', 1)
  })
})
