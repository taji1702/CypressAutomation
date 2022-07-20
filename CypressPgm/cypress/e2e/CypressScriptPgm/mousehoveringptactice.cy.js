describe("hover into the webelement", function(){

    it("hover in to the support webelement",function(){


        cy.visit("https://www.ebay.com.au/",{failOnStatusCode:false})
        cy.wait(2000); 

        // cy.xpath("(//a[text()='Motors'])[2]").trigger('mouseover');
        // cy.wait(2000)
        // cy.xpath("//a[text()='Toyota']").click();

        // cy.xpath("(//a[text()='Home & Garden'])[2]").trigger('mouseover');
        // cy.wait(2000)
        // cy.xpath("//a[text()='Sofas']").click()

        // cy.xpath("(//a[text()='Clothing & Accessories'])[1]").trigger('mouseover');
        // cy.wait(2000)
        // cy.xpath("//a[text()='Sneakers']").click()

        // cy.xpath("(//a[text()='Clothing & Accessories'])[1]").then(function(clothesaccesoriestextvalue){
        //     cy.log(clothesaccesoriestextvalue.text());
        // })                                             // for printing text
        
        cy.get("li[class='hl-cat-nav__js-tab']").eq(3).trigger('mouseover')
        // cy.xpath("(//a[text()='Clothing & Accessories'])[1]").should('have.text',"Clothing & Accessories") //Assertion

        // cy.xpath("(//a[text()='Clothing & Accessories'])[1]").trigger('mouseover');
        cy.wait(2000)
        cy.get("nav[aria-label='Top Categories'] ul li a").eq(23).click()

        
        

    })

})