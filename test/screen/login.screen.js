class LoginScreen {
    constructor() {
        this.usernameField = "~Username input field"
        this.passwordField = "~Password input field"
        this.loginButton = "~Login button"
        this.menuButton = "~open menu"
        this.botVideo = "~menu item sauce bot video"
        
    }
    async loginWithValidUser(username, password) {
        await $(this.usernameField).setValue(username)
        await $(this.passwordField).setValue(password)
        await $(this.loginButton).click()
       
    }
    async accessVideo() {
        await $(this.menuButton).click()
        await $(this.botVideo).click()
    }
}

export default new LoginScreen()