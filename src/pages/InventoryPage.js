export class InventoryPage{
    constructor(page){
        this.page=page;

        this.inventoryItem=page.locator('.inventory_item');
        this.cartButton=page.locator('.shopping_cart_link');
        this.cartBadge=page.locator('.shopping_cart_badge');
        this.menuButton=page.locator('#react-burger-menu-btn');
        this.logoutButton=page.locator('#logout_sidebar_link');
        this.sortDropdown=page.locator('[data-test="product_sort_container"]');
    }

    async visibleFullInventory(){
        return this.inventoryItem.count();
    }

    async addItemToCart(itemName){
        await this.page.click(
        `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`);
    }

    async removeItemFromCart(itemName){
        await this.page.click(
        `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`);
    }

    async openProductDetails(itemName){
        await this.page.click(`text=${itemName}`);
    }

    async openCart(){
        await this.cartButton.click();
    }

    async getNumberOfItemsInCart(){
        const badgeExists=await this.cartBadge.count();

        if(badgeExists===0){
            return 0;
        }
        const number=await this.cartBadge.textContent();
        return parseInt(number);
    }

    async sortBy(option){
        await this.sortDropdown.selectOption(option);
    }

    async logout(){
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}