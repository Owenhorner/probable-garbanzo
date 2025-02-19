// src/tests/home/home.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('The Internet Home Page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('should display correct title and heading', async () => {
        await expect(homePage.page).toHaveTitle('The Internet');
        await expect(homePage.heading()).toHaveText('Welcome to the-internet');
    });

    test('should display list of examples', async () => {
        const examples = await homePage.getAvailableExamples();
        expect(examples.length).toBeGreaterThan(0);
        expect(examples).toContain('Form Authentication');
        expect(examples).toContain('File Upload');
    });

    test('should navigate to example page when clicked', async () => {
        await homePage.clickExample('Form Authentication');
        await expect(homePage.page).toHaveURL(/.*\/login/);
    });
});