/// <reference types="cypress" />
import login from '../page/login.page'

const tests = require('../../fixtures/example.json')

describe('Sort', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('sorts product list from A-Z', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cy.get('.product_sort_container').select('az')

        var productlist = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productlist.sort()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productlist[index])
        })
    })

    xit('should sort product list from Z-A', () => {
        login.Usernameitem(tests.username);
        login.Passworditem(tests.password);
        login.UserLogin();

        cy.get('.product_sort_container').select('za')

        var productlist = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productlist.sort().reverse()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productlist[index])
        })
    })
})