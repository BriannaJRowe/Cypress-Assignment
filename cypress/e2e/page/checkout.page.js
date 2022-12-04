class checkout{

    //selectors
    get shoppingcart() 
    {
        return ('.shopping_cart_link')
    }

    get checkoutbtn()
    {
        return ('#checkout')
    }

    get title()
    {
        return ('.title')
    }

    get fname()
    {
        return ('#first-name')
    }

    get lname()
    {
        return ('#last-name')
    }

    get postcode()
    {
        return ('#postal-code')
    }

    get continuebtn()
    {
        return('#continue')
    }

    get itemquantity()
    {
        return('.cart_quantity')   
    }

    get itemname()
    {
        return('.inventory_item_name')
    }

    get itemprice()
    {
        return('.inventory_item_price')
    }

    get finishbtn()
    {
        return('#finish')
    }

    get completeheader()
    {
        return('.complete-header')
    }

    get errormessage()
    {
        return ('.error-button')
    }

    //methods

    checkoutinfo()
    {
       // cy.get(this.shoppingcart).click();
        //cy.get(this.checkoutbtn).click();
       // cy.get(this.title).should('have.text', 'Checkout: Your Information')
        cy.get(this.fname).type('Brianna')
        cy.get(this.lname).type('Rowe')
        cy.get(this.postcode).type('32003') 
        cy.get(this.continuebtn).click()
    }


    /*checkoutoverview()
    {
        //cy.get(this.title).should('have.text', 'Checkout: Overview')
        cy.get(this.continuebtn).click();
        cy.get(this.itemquantity).should('have.text', 1);
        cy.get(this.itemname).should('have.text', 'Sauce Labs Backpack')
        //cy.get(this.itemprice).should('have.text', '$29.99')
        cy.get(this.finishbtn).click();
        cy.get(this.completeheader).should('have.text', 'THANK YOU FOR YOUR ORDER');
    }*/


}

export default new checkout()