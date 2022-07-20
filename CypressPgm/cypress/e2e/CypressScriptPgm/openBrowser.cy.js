describe("Open Browser WebSite",function(){

    it("AmazonWebsite",function(){

        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.wait(2000); 

       // cy.get("input[id='email']").type("abc@gmail.com")
        //cy.get("input[id='pass']").type("admin")
        //cy.get("button[name='login']").click()

        cy.xpath("//input[@name='firstName']").type("abc")
        cy.xpath("//input[@type='submit']").click();





    })

   
})