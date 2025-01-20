import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
       await MenuScreen.accessLoginScreen()
       await LoginScreen.loginWithInvalidUser()
       await expect($(LoginScreen.errorMessage).toHaveText("Provided credentials do not match any user in this service."))
    })


})


