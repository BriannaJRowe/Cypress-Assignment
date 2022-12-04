class login {

    get username() {
        return ('#user-name')
    }

    get password() {
        return ('#password')
    }

    get loginbtn() {
        return ('#login-button')
    }

    get errormessage()
    {
        return ('.error-button')
    }

    Usernameitem(username)
    {
        cy.get(this.username).type(username);
    }

    Passworditem(password)
    {
        cy.get(this.password).type(password);
    }

    UserLogin()
    {
        cy.get(this.loginbtn).click();
    }

}

export default new login()