import { Selector } from "testcafe";

//prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test ("User requests a new password to be sent on his email address", async t=> {

    // Get selectors 
    const singInButton = Selector ('#signin_button')
    const linkToForgottenPassword = Selector ('a').withText('Forgot your password ?')
    const emailInput = Selector ('#user_email')
    const message = Selector ('div').innerText

    // Actions 
    await t.click(singInButton)
    await t.click(linkToForgottenPassword)
    await t.typeText(emailInput, 'email@email.com', {paste: true})
    await t.pressKey('enter')

    // Assertions
    await t.expect(message).contains('email@email.com')
    await t.expect(emailInput.exists).notOk()

})