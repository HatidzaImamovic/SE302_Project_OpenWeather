export class CheckoutPage{
    constructor(page){
        this.page=page;

        this.firstNameInput=page.locator('#first-name');
        this.lastNameInput=page.locator('#last-name');
        this.postalCodeInput=page.locator('#postal-code');
        this.continueButton=page.locator('#continue');
        this.cancelButton=page.locator('#cancel')
        this.finishButton=page.locator('#finish');
        this.thankYouMsg=page.locator('.complete-header');
        this.backHomeButton=page.locator('#back-to-products');
    }

    async checkOut(firstName, lastName, postalCode){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async cancelCheckout(){
        await this.cancelButton.click();
    }

    async finishCheckout(){
        await this.finishButton.click();
    }

    async returnToHome(){
        await this.backHomeButton.click();
    }

    async displayThankYouMsg(){
        return this.thankYouMsg.textContent();
    }
}