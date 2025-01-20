class LoginScreen {
    constructor() {
        this.usernameField = "~Username input field"
        this.passwordField = "~Password input field"
        this.loginButton = "~Login button"
        this.errorMessage = "//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView"
    }
    async loginWithInvalidUser() {
        await $(this.usernameField).setValue("TestingUser")
        await $(this.passwordField).setValue("PasswordFail")
        await $(this.loginButton).click()
        await $(this.errorMessage)
    }
}

export default new LoginScreen()