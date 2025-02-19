import { Page } from "playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Base URL
    readonly url = 'https://the-internet.herokuapp.com/login';

    // Locators
    readonly heading = () => this.page.locator('h2');
    readonly flashMessage = () => this.page.locator('#flash');
    readonly subheader = () => this.page.locator('h4.subheader');
    readonly logoutIcon = () => this.page.locator('a[href="/logout"] i');

    // Actions
    async goto() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}