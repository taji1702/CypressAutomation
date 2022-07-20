describe("hover into the webelement", function(){

    it("hover in to the support webelement",function(){


        cy.visit("https://www.ebay.com.au/",{failOnStatusCode:false})
        cy.wait(2000); 

        cy.xpath("(//a[text()='Electronics'])[2]").trigger('mouseover');
        cy.wait(2000)
        cy.xpath("(//a[text()='Mobile Phones'])").click();
    })

})