/// <reference types="cypress" />
import login from '../page/login.page'
import cart from '../page/cart.page'
import checkout from '../page/checkout.page'

const tests = require('../../fixtures/example.json')

describe('Cart & Checkout', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    /**CART***/
    xit('adds 1 product to cart', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.add1tocart();
        cy.get(cart.cartnotif).should('have.text', 1)

    } )

    xit('adds multiple products to the cart', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.addmanytocart(); //add assertions
    } )

    /**CHECKOUT**/
    // this test completes the entire checkout workflow
    xit('adds an item to cart and checks out', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.add1tocart(); //adds an item to the cart and verifies the item in the cart
        cy.get(cart.shoppingcart).click();
        cy.get(cart.cartquantity).should('have.text', 1)
        cy.get(cart.removeproductone).should('be.visible')
        cy.get(cart.cartitemname).should('have.text', 'Sauce Labs Backpack')

        cy.get(checkout.checkoutbtn).click();
        cy.get(checkout.title).should('have.text', 'Checkout: Your Information')
        checkout.checkoutinfo(); //checkout info

        //checkout overview and complete checkout
        cy.get(checkout.itemquantity).should('have.text', 1);
        cy.get(checkout.itemname).should('have.text', 'Sauce Labs Backpack');

        cy.get(checkout.finishbtn).click();
        cy.get(checkout.completeheader).should('have.text', 'THANK YOU FOR YOUR ORDER');
    })

    //Remove product from cart
    it('removes a product from cart', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.add1tocart();
        cy.get(cart.shoppingcart).click();
        cy.get(cart.cartitemname).should('have.text', 'Sauce Labs Backpack')
        cy.get(cart.removeproductone).should('be.visible')
        cy.get(cart.removeproductone).click()

        cy.get(cart.cartitemname).should('not.exist')
        cy.get(cart.removedcartitem).should('exist')

    })

    //Remove product from product list page
    it('should remove a product from the product list page', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.add1tocart();

        cart.remove1fromproductlistpage();
        cy.get(cart.cartnotif).should('not.exist');

    })

    //**NEGATIVE TESTS**
    xit('should NOT allow the user to proceed to checkout overview', () => {

        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cart.add1tocart();
        cy.get(cart.shoppingcart).click();
        cy.get(cart.cartquantity).should('have.text', 1)
        cy.get(cart.removeproductone).should('be.visible')
        cy.get(cart.cartitemname).should('have.text', 'Sauce Labs Backpack')

        cy.get(checkout.checkoutbtn).click();
        cy.get(checkout.title).should('have.text', 'Checkout: Your Information')
        
        cy.get(checkout.lname).type('Smith')
        cy.get(checkout.postcode).type('32006') 
        cy.get(checkout.continuebtn).click()

        cy.get(login.errormessage).should('be.visible')
    })

    

});