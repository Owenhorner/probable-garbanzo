import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('The Internet Login Page', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should display correct title and heading', async () => {
        await expect(loginPage.page).toHaveTitle('The Internet');
        await expect(loginPage.heading()).toHaveText('Login Page');
    });

    test('should allow user to login', async () => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        test.step('should display correct flash message and redirect to secure area', async () => {
            await expect(loginPage.flashMessage()).toContainText('You logged into a secure area!');
        });
        test.step('should display correct subheader', async () => {
            await expect(loginPage.subheader()).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
        });
        test.step('should redirect to secure area', async () => {
            await expect(loginPage.page).toHaveURL(/.*\/secure/);
        });
    });
});