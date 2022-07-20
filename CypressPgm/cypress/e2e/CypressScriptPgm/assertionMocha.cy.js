describe("hover into the webelement", function(){

    it.only("hover in to the support webelement",function(){


        cy.visit("https://www.google.com",{failOnStatusCode:false})
        cy.wait(2000); 
       

       //cy.get("a[data-csa-c-content-id='nav_cs_fashion']").should('have.text','Fashion')
       //cy.get("a[data-csa-c-content-id='nav_cs_fashion']").click();

       cy.get("input[name='q']").type("Testing{enter}")

       cy.get("input[name='q']").should('have.value',"Testing")
    // cy.visit("https://login.anz.com/internetbanking",{failOnStatusCode:false})
    // cy.get("input[id='customerRegistrationNumber']").type("87654987")
    // cy.get("input[id='password']").type("password@1234")
    // cy.contains("Log in").should('have.text','Log in to ANZ Internet Banking')
    // cy.get("button[data-test-id='log-in-btn']").click()
    // cy.get("span[role='text']").eq(1).click()



    })
   it("Working on Assert Button",()=>{

    cy.visit("https://www.expedia.com/",{failOnStatusCode:false})
        cy.wait(2000); 
        cy.get("button[data-testid='submit-button']").should('be.visible');
        cy.get("button[data-testid='submit-button']").should('be.enabled');

        cy.get("button[data-testid='submit-button']").should('not.be.disabled');
        cy.get("button[data-testid='submit-button']").should('have.attr',"type")

        cy.get("a[data-stid='listYourProperty-link'] div").should('include.text',"property")




   }) 

    



})