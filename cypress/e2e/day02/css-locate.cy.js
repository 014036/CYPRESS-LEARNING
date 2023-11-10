describe('css-locate test', function(){

    it('locate test01', ()=>{

        cy.visit('https://www.koalaresorthotels.com/')
cy.get('#navLogon').click()
cy.get('[placeholder="Username"]').type('emre')
cy.get('[placeholder="Password"]').type('EmrE12345.')
cy.get('#btnSubmit').click()

    })

 
})