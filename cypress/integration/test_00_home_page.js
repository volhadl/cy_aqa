/// <reference types="Cypress" />

const homepage = require('../../page/homepage').homepage; 

describe("Should navigate tp Docs page", ()=>{

    const url = "https://www.cypress.io/"
   
    it("Navigate to cypres homepage", ()=>{
        cy.visit(url)

        cy.contains("The web has evolved.")
    })

    it("Navigate to cypress docs page", ()=>{
        cy.get(homepage.docs_tab)
          .contains('Docs')
          .should('have.attr', 'href', 'https://docs.cypress.io')
    })
})