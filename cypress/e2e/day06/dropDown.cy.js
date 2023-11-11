describe ('DropDown Testi', function(){

    it.skip('Select Tag Is Avalaible Test01', ()=>{

    cy.visit('https://www.amazon.com.tr/');
     cy.get("[name='accept']").click();
    cy.get('#searchDropdownBox').select('Bebek').should('have.value', "search-alias=baby");

    })


    it.skip('Select Tag Is Not Avalaible', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('United Arab Emirates{Enter}');
        cy.get('#select2-billing_country-container').should('have.text','United Arab Emirates');

    })

    it.skip('Auto Suggest Dropdown', ()=>{

        cy.visit('https://wikipedia.org/');
        cy.get('[id="searchInput"]').type('istanbul');
        cy.get('[class="suggestion-link"]').contains('Atatürk Havalimanı').click();
    })


    it('Dinamik Dropdown Testi01', function(){
      cy.visit('https://www.google.com.tr/?hl=tr');
    //   cy.get('[name="q"]').type('Cypress otomasyon{enter}');
      cy.get('[name="q"]').type('Cypress');
      
      cy.get('.wM6W7d>span').each(($el, index, $list) => {
        // $el is a wrapped jQuery element $el sarılmış bir jQuery öğesidir
        if ($el.text() === 'cypress install') {
          // wrap this element so we can // bu elemanı saralım böylece
          
          // use cypress commands on it  // üzerinde selvi komutlarını kullan
          cy.wrap($el).click()
        } else {
          // do something else başka bir şey yap
        }
      })

    })
})