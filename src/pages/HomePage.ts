// src/pages/HomePage.ts
import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Base URL
    readonly url = 'https://the-internet.herokuapp.com';

    // Locators
    readonly heading = () => this.page.locator('h1.heading');
    readonly examplesList = () => this.page.locator('ul li a');

    // Actions
    async goto() {
        await this.page.goto(this.url);
    }

    async getAvailableExamples() {
        return this.examplesList().allTextContents();
    }

    async clickExample(name: string) {
        await this.page.locator(`a:text("${name}")`).click();
    }
}