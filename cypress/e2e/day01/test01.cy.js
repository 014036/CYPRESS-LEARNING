describe('first test ', ()=>(){

    it('test 01', ()=>{ //cypress'te tek ve cift tirnak arasinda fark yoktur

    cy.visit('https://www.koalaresorthotels.com/')
    cy.url().should('include','koalaresorthotels')
    cy.title().should('include', 'KoalaResortHotels')


    })



})