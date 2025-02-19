import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../../pages/AddRemoveElementsPage';

test.describe('Add/Remove Elements', () => {
    let page: AddRemoveElementsPage;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const pageInstance = await context.newPage();
        page = new AddRemoveElementsPage(pageInstance);
        await page.goto();
    });

    test('should display correct title and heading', async () => {
        await expect(page.page).toHaveTitle('The Internet');
        await expect(page.heading()).toHaveText('Add/Remove Elements');
    });

    test('should add a single element', async () => {
        await page.addElement();
        expect(await page.getDeleteButtonsCount()).toBe(1);
    });

    test('should add multiple elements', async () => {
        const elementsToAdd = 3;
        for (let i = 0; i < elementsToAdd; i++) {
            await page.addElement();
        }
        expect(await page.getDeleteButtonsCount()).toBe(elementsToAdd);
    });

    test('should remove an element', async () => {
        await page.addElement();
        await page.deleteElement(0);
        expect(await page.getDeleteButtonsCount()).toBe(0);
    });

    test('should handle adding and removing multiple elements', async () => {
        for (let i = 0; i < 3; i++) {
            await page.addElement();
        }
        expect(await page.getDeleteButtonsCount()).toBe(3);

        await page.deleteElement(0);
        await page.deleteElement(0);
        expect(await page.getDeleteButtonsCount()).toBe(1);
    });
});