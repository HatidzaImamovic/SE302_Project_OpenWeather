class SignupPage{
    constructor(page){
        this.page=page;

        this.usernameInput=page.locator('#user_username');
        this.emailInput=page.locator('#user_email');
        this.passwordInput=page.locator('#user_password');
        this.passwordConfirmInput=page.locator('#user_password_confirmation');
        this.errorMsg=page.locator('.alert');
        this.submitButton=page.locator('input[type=submit"]');
    }

    async signUp(email, password, confirmPassword){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.passwordConfirmInput.fill(confirmPassword);
        await this.submitButton.click();
    }

    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }
}

module.exports={SignupPage};