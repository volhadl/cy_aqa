/// <reference types="Cypress" />

xdescribe("Should navigate tp Docs page", function(){

    it("Navigate to cypres homepage", function(){
        cy.visit("https://www.cypress.io/")

        cy.contains("The web has evolved.")
    })

    it("Navigate to cypress docs page", function(){
        cy.get('li > [aria-label="docs"]')
          .contains("Docs")
          .click()

        //cy.contains("Why Cypress?")
    })
})