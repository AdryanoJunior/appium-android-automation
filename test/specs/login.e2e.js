import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'


describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
       await $("~open menu").click()
       await $("//*[@text='Log In']").click()
       await $("~Username input field").setValue("Testing")
       await $("~Password input field").setValue("PasswordFail")
       await $("~Login button").click()
       await expect($("//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView").toHaveText("Provided credentials do not match any user in this service."))
    })


})


