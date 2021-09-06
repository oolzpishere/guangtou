/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state')
    cy.viewport(1920, 1080)
  })

  it('body width and height', () => {
     cy.visit('/home')
     cy.get('body').should(($el) => {
       expect( $el[0].getBoundingClientRect().width ).to.be.equal(1920);
       expect( $el[0].getBoundingClientRect().height ).to.be.equal(1080);

     })
    // cy.get('.todo-list li').should('have.length', 2)
  })



})
