/// <reference types="Cypress" />

const docs_page = require('../../page/docs_page').docs_page; 

describe("Should get first result", ()=>{

    const url = "https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"

    it("Navigate to cypres homepage", ()=>{
        cy.visit(url)

        cy.contains("Why Cypress?")
    })
    it("Should type type and get first result", ()=>{
       cy.get(docs_page.search_field)
         .type("should")
         .should('have.value', 'should')
        cy.get(docs_page.search_result).click()
        
        cy.contains("should")
    })
})