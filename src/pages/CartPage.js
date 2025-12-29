export class CartPage{
    constructor(page){
        this.page=page;

        this.cartItem=page.locator('.cart_item');
        this.removeButton=page.locator('button[data-test^="remove"]');
        this.checkoutButton=page.locator('#checkout');
        this.continueShoppingButton=page.locator('#continue-shopping');
    }

    async itemInCart(itemName){
        return this.page.isVisible(`text=${itemName}`);
    }

    async removeItem(itemName){
        await this.page.click(
         `//div[text()="${itemName}"]/ancestor::div[@class="cart_item"]//button`);
    }

    async checkOut(){
        await this.checkoutButton.click();
    }

    async contineShopping(){
        await this.continueShoppingButton.click();
    }
}