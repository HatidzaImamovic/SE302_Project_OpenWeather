import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Test Cases for Inventory', () => {
    let loginPage;
    let inventoryPage;
    let cartPage;

    test.beforeEach(async ({page}) => {
        loginPage=new LoginPage(page);
        inventoryPage=new InventoryPage(page);
        cartPage=new CartPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await page.goto('https://www.saucedemo.com/inventory.html');
    });

    test('All items are displayed in inventory', async () => {
        const count=await inventoryPage.visibleFullInventory();

        expect(count).toBe(6);
    });

    test('Add Items to Basket', async () => {
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.addItemToCart('Sauce Labs Bike Light');

        const count=await inventoryPage.getNumberOfItemsInCart();

        expect(count).toBe(2);
    });

    test('Remove Items from Basket', async () => {
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.removeItemFromCart('Sauce Labs Backpack');

        const count=await inventoryPage.getNumberOfItemsInCart();

        expect(count).toBe(0);
    });

    test('Sort Items by Name (A-Z)', async () => {
        await inventoryPage.sortBy('az');

        const names=await inventoryPage.getItemNames();
        const sortedNames=[...names].sort();

        expect(names).toEqual(sortedNames);
    });

    test('Sort Items by Price (low-high)', async () => {
        await inventoryPage.sortBy('lohi');

        const prices=await inventoryPage.getItemPrices();
        const sortedPrices=[...prices].sort((a, b) => a-b);
        expect(prices).toEqual(sortedPrices);
    });

    test('Product Details Page', async ({page}) => {
        await inventoryPage.visibleFullInventory();
        await inventoryPage.openProductDetails('Sauce Labs Backpack');

        await expect(page).toHaveURL(/inventory-item.html/);
    });

    test('Logout from website', async ({page}) => {
        await inventoryPage.logout();

        expect(page).toHaveURL('https://www.saucedemo.com/');
    });
})
