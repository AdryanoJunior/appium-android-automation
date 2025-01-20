class LoginScreen {
    constructor() {
        this.usernameField = "~Username input field"
        this.passwordField = "~Password input field"
        this.loginButton = "~Login button"
        
    }
    async loginWithValidUser(username, password) {
        await $(this.usernameField).setValue(username)
        await $(this.passwordField).setValue(password)
        await $(this.loginButton).click()
       
    }
}

export default new LoginScreen()