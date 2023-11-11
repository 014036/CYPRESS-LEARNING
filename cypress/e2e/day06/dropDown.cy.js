describe ('DropDown Testi', function(){

    it('Select Tag Is Avalaible Test01', ()=>{

    cy.visit('https://www.amazon.com.tr/');
     cy.get("[name='accept']").click();
    cy.get('#searchDropdownBox').select('Bebek').should('have.value', "search-alias=baby");




    })
})