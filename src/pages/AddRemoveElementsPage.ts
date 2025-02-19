import { Page } from '@playwright/test';

export class AddRemoveElementsPage {
    readonly page: Page;
    readonly addElementButton = () => this.page.locator('button[onclick="addElement()"]');
    readonly deleteButtons = () => this.page.locator('.added-manually');
    readonly heading = () => this.page.locator('#content h3');

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/add_remove_elements/');
    }

    async addElement() {
        await this.addElementButton().click();
    }

    async deleteElement(index: number) {
        await this.deleteButtons().nth(index).click();
    }

    async getDeleteButtonsCount() {
        return await this.deleteButtons().count();
    }
}
