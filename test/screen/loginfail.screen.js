class LoginFailScreen {
    constructor() {
        this.usernameField = "~Username input field"
        this.passwordField = "~Password input field"
        this.loginButton = "~Login button"
        this.errorMessage = "//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView"
    }
    async loginWithInvalidUser(username, password) {
        await $(this.usernameField).setValue(username)
        await $(this.passwordField).setValue(password)
        await $(this.loginButton).click()
        await $(this.errorMessage)
    }
}

export default new LoginFailScreen()