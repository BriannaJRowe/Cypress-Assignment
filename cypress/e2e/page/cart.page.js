class cart {

    //selectors
    get productone() {
        return ('#add-to-cart-sauce-labs-backpack')
    }

    get producttwo()
    {
        return ('#add-to-cart-sauce-labs-bike-light')
    }

    get removeproductone() {
        return ('#remove-sauce-labs-backpack')
    }

   get removeproducttwo()
    {
        return ('#remove-sauce-labs-bike-light')
    }

    get shoppingcart() {
        return ('.shopping_cart_link')
    }

    get cartquantity()
    {
        return('.cart_quantity')   
    }

    get cartitemname()
    {
        return('.inventory_item_name')
    }

    get removedcartitem()
    {
        return('.removed_cart_item')
    }

    get cartnotif()
    {
        return('.shopping_cart_badge')
    }

    add1tocart()
    {
        cy.get(this.productone).click()
        //cy.get(this.shoppingcart).click();
    }

    addmanytocart()
    {
        cy.get(this.productone).click()
        cy.get(this.producttwo).click()
    }

    //methods
    /*remove1fromcart()
    {
        //cy.get(this.shoppingcart).click()
        cy.get(this.removeproductone).click()
    }*/

    remove1fromproductlistpage()
    {
        cy.get(this.removeproductone).click()
    }

}

export default new cart()