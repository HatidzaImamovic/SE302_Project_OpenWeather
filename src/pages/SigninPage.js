class SigninPage{
    constructor(page){
        this.page=page;

        this.emailInput=page.locator('#user_email');
        this.passwordInput=page.locator('#user_password');
        this.submitButton=page.locator('input[type="submit"]');
        this.errorMsg=page.locator('.alert');
        this.signUpLink=page.locator('a[href="/users/sign_up"]');
    }

    async signIn(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }

    async goToSignUp(){
        await this.signUpLink.click();
    }
}

module.exports={SigninPage};