import userData from '../data/userData.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginFailScreen from '../screen/loginfail.screen.js'
import LoginScreen from '../screen/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
       await MenuScreen.accessLoginScreen()
       await LoginFailScreen.loginWithInvalidUser(userData.userFail.username, userData.userFail.password)
       await expect($(LoginFailScreen.errorMessage).toHaveText("Provided credentials do not match any user in this service."))
    })

    it('should login with valid credentials', async () => {
      await MenuScreen.accessLoginScreen()
      await LoginScreen.loginWithValidUser(userData.userSuccess.username, userData.userSuccess.password)
     
   })



})

 
 




