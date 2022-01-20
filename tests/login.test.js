import { Selector, t } from "testcafe";

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test ("User cannot login with invalid credentials", async t => {

    const singInButton = Selector ('#signin_button')
    await t.click(singInButton)

    const loginForm = Selector ('#login_form')
    await t.expect(loginForm.exists).ok()

    const username = Selector ('#user_login')
    const password = Selector ('#user_password')
    await t.typeText(username, 'invalid username', { paste: true })
    await t.typeText(password, 'invalid password', { paste: true })

    const submitButton = Selector ('.btn-primary') //with classes use form .class
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')

})

test.only ("User login with valid credentials", async t => {

    const singInButton = Selector ('#signin_button')
    await t.click(singInButton)

    const loginForm = Selector ('#login_form')
    await t.expect(loginForm.exists).ok()

    const username = Selector ('#user_login')
    const password = Selector ('#user_password')
    await t.typeText(username, 'username', { paste: true })
    await t.typeText(password, 'password', { paste: true })

    await t.pressKey('enter')
   
})

