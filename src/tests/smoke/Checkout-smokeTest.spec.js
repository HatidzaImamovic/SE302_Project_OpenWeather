import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';
import {CartPage} from '../../pages/CartPage';
import {CheckoutPage } from '../../pages/CheckoutPage'

test.describe('SMOKE: Checkout page opens', () => {
     test('checkout page opens',async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.openCart();

        await cartPage.checkOut();

        await expect(checkoutPage.firstNameInput).toBeVisible();
        await expect(checkoutPage.lastNameInput).toBeVisible();
        await expect(checkoutPage.postalCodeInput).toBeVisible();
    });
});
