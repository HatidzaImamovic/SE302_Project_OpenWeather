import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {CartPage} from '../../pages/CartPage';
import {InventoryPage} from '../../pages/InventoryPage';

test.describe('SMOKE: Cart page loads', () => {
     test('cart page loads',async ({page}) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.openCart();

        await expect(cartPage.checkoutButton).toBeVisible();
  });
});
