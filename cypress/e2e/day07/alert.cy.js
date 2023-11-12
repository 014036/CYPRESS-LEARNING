//ALERT UYARILARINI HANDLE ETMEK

describe('Alert testleri',function(){

    it('Java Script Alert Test01',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();
        cy.on('window:alert()',function(t){
            expect(t).to.contain('I am a JS Alert')
        });
        cy.get('#result').should('have.text', "You successfully clicked an alert")

    })


    //CONFIRM ALERT HANDLE ETMEK 'CANCEL' VE 'OK' OLAN ALERTLER ICIN
    it('Java Script Alert Test01',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', function(t){
            expect(t).to.contain('I am a JS Confirm');
        });
        cy.get('#result').should('have.text','You clicked: Ok')
  

    })

    //CONFIRM ALERT HANDLE ETMEK 'CANCEL' VE 'OK' OLAN ALERTLER ICIN
    it('Java Script Alert Test01',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', function(t){
            expect(t).to.contain('I am a JS Confirm');
        });

        cy.on('window:confirm',(t)=>false);
       
        cy.get('#result').should('have.text','You clicked: Cancel')
  

    })


    //ALERTLERE TEXT GONDERIP OK BUTONUNA BASMAK ICIN

    it('Promp Alert Test01',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Merhaba')
        });
        cy.get('[onclick="jsPrompt()"]').click();
        cy.get('#result').should('have.text', 'You entered: Merhaba')
  

    })


//AUTHENTICATION ALERT
it.only('Authentication Alert Test 01',function(){
    cy.visit('https://the-internet.herokuapp.com/basic_auth');
})

     
})