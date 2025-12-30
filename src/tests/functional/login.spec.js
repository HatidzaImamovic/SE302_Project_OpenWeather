import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Tests for Login', () => {
    let loginPage;
    let inventoryPage;

    test.beforeEach(async ({page}) => {
        loginPage=new LoginPage(page);
        inventoryPage=new InventoryPage(page);
        await loginPage.navigate();
    });

    test('Login with valid information', async () => {
        await loginPage.login('standard_user', 'secret_sauce');

        expect(await inventoryPage.visibleFullInventory()).toBe(6);
    });

    test('Login with invalid information', async () => {
        await loginPage.login('test_wrong', 'wrong_pass');

        expect(await loginPage.getErrorMsg()).toContain('Epic sadface');
    });

    test('Login with empty fields', async () => {
        await loginPage.login('', '');

        expect(await loginPage.getErrorMsg()).toContain('is required');
    });
})
