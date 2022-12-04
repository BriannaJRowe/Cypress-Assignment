class product{
    
    //Selectors
    get itemsName() { return ('.inventory_item_name') }
    get itemsPrice() { return ('.inventory_item_price') }

    get SortDropDown() 
    { 
        return ('.product_sort_container') 
    }

    //Methods
    Sort(sort){
        cy.get(this.SortDropDown).select(sort)
    }

}

export default new product()