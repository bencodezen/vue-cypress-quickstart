// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js App - Error')
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js App')
  })

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js App')
  })
})
