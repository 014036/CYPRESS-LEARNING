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


    //TIKLAMALARI KALDIRMAK ICIN
    cy.get('#hondacheck').uncheck().should('not.be.checked')
    cy.get('#benzcheck').uncheck().should('not.be.checked')
    cy.get('#bmwcheck').uncheck().should('not.be.checked')


    //hepsini birlikte tiklamak icin butun elementlerin ortak ogeleriyle locatelerini al
    cy.get("input[name='cars'][type='checkbox']").check().should('be.checked');

    //eger sadece ilk elemente tiklamak istiyorsak
    cy.get("input[name='cars'][type='checkbox']").first().check().should('be.checked');

    //eger sadece son elemente tiklamak istiyorsak
    cy.get("input[name='cars'][type='checkbox']").last().check().should('be.checked');
})



})