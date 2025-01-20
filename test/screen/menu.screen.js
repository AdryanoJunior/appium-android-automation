class MenuScreen {
    constructor() {
        this.leftMenuButton = "~open menu"
        this.leftLoginButton = "//*[@text='Log In']"

    }
    async accessLoginScreen() {
       await $(this.leftMenuButton).click()
       await $(this.leftLoginButton).click()
    }
}

export default new MenuScreen()