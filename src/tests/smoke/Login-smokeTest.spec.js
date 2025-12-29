import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

test.describe('SMOKE: Login page loads', () => {
     test('login page load',async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });
});

test.describe('SMOKE: Valid login works', () => {
     test('user logs in with valid info',async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory.html/);
    });
});
