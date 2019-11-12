/// <reference types="Cypress" />

describe("Should get first result", function(){

    it("Navigate to cypres homepage", function(){
        cy.visit("https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell")

        cy.contains("Why Cypress?")
    })
    it("Should type type and get first result", function(){
       cy.get("span>#search-input")
         .type("should")
         .should('have.value', 'should')
        cy.get("div.ds-suggestion:nth-child(1)> * > *> span>*").click()
        
        cy.contains("should")
    })
})