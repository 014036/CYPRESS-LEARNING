describe('RadioAndCheckbox Testleri', function(){

it.skip('Radio Button Testleri', ()=>{

    cy.visit('https://www.letskodeit.com/practice')
    cy.get('#bmwradio').should('be.visible');
    cy.get('#benzradio').check().should('be.visible')
    cy.get('#hondaradio').check().should('be.visible')

    cy.get('#bmwradio').check().should('be.checked');
    cy.get('#benzradio').should('not.be.checked');
    cy.get('#hondaradio').should('not.be.checked');

    cy.get('#benzradio').check().should('be.checked')
    cy.get('#bmwradio').should('not.be.checked');
    cy.get('#hondaradio').should('not.be.checked');

    cy.get('#hondaradio').check().should('be.checked')
    cy.get('#benzradio').should('not.be.checked')
    cy.get('#bmwradio').should('not.be.checked')


})

it('Check Box test', ()=>{
    cy.visit('https://www.letskodeit.com/practice')
    cy.get('#bmwcheck').should('be.visible');
    cy.get('#benzcheck').should('be.visible')
    cy.get('#hondacheck').should('be.visible')

    cy.get('#bmwcheck').check().should('be.checked');
     cy.get('#benzcheck').should('not.be.checked');
    cy.get('#hondacheck').should('not.be.checked');

    cy.get('#benzcheck').check().should('be.checked')
    cy.get('#bmwcheck').should('be.checked');
    cy.get('#hondacheck').should('not.be.checked');

    cy.get('#hondacheck').check().should('be.checked')
    cy.get('#benzcheck').should('be.checked')
    cy.get('#bmwcheck').should('be.checked')
})



})