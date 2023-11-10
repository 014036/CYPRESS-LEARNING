describe('assertion', function(){

it('Assertion Testi', ()=>{

    // cy.visit('https://www.koalaresorthotels.com/')
    // cy.url().should('include','koalaresorthotels')
    // cy.url().should('contain', 'koa')
    // cy.url().should('eq', 'https://www.koalaresorthotels.com/')

    //VEYA DOGRULAMA SU SEKILDE DE YAPILABILIR
    cy.visit('https://www.koalaresorthotels.com/')
    cy.url().should('include','koalaresorthotels')
    .and('contain', 'koa')
    .and('eq', 'https://www.koalaresorthotels.com/')

    cy.get('a[class="navbar-brand"]').should('be.visible')
    cy.get('a[class="navbar-brand"]').should('exist')

  

})

})