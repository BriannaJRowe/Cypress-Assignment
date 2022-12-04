/// <reference types="cypress" />
import login from '../page/login.page'
import cart from '../page/cart.page'
import checkout from '../page/checkout.page'

const tests = require('../../fixtures/example.json')

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Logs in a valid user', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();
    } )

    //**NEGATIVE TESTS**
    xit('should NOT log the user in without a username', () => {

        login.Passworditem(tests.password);
        cy.get(login.loginbtn).click();
        cy.get(login.errormessage).should('be.visible')
        //cy.get(login.errormessage).should('have.text','Epic sadface: Username is required')

    })

    xit('should NOT log the user in without a password', () => {
        login.Usernameitem(tests.username);
        cy.get(login.loginbtn).click();
        cy.get(login.errormessage).should('be.visible')
        //cy.get(login.errormessage).should('have.text','Epic sadface: Password is required')
    })

});