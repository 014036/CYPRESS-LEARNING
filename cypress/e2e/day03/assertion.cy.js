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


    //ASSERTION YAPMA
    cy.get('a[class="navbar-brand"]').should('be.visible')
    //VEYA
    cy.get('a[class="navbar-brand"]').should('exist')
    //VEYA
    cy.get('a[class="navbar-brand"]').should('have value', '')

  

})

it('Explicit Assertion', function(){

    cy.visit('https://www.koalaresorthotels.com/')
    cy.get('#navLogon').click()
    cy.get('[placeholder="Username"]').type('emre')
    cy.get('[placeholder="Password"]').type('EmrE12345.')
    cy.get('#btnSubmit').click()

    let expName='emre'

    cy.get('#edit-form > :nth-child(2)').then(function(x){
        let actualName=x.text()
        // assert.equal(expName, actualName)   
       

    })
})

})