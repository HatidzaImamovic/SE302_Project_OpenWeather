import { CheckoutLocators } from "../locators/locators";

export class CheckoutPage{
    constructor(page){
        this.page=page;

        this.firstNameInput=page.locator(CheckoutLocators.firstNameInput);
        this.lastNameInput=page.locator(CheckoutLocators.lastNameInput);
        this.postalCodeInput=page.locator(CheckoutLocators.postalCodeInput);
        this.continueButton=page.locator(CheckoutLocators.continueButton);
        this.cancelButton=page.locator(CheckoutLocators.cancelButton);
        this.finishButton=page.locator(CheckoutLocators.finishButton);
        this.thankYouMsg=page.locator(CheckoutLocators.thankYouMsg);
        this.backHomeButton=page.locator(CheckoutLocators.backHomeButton);
        this.errorMsg=page.locator(CheckoutLocators.errorMessage);
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

    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }
}
