import { expect, type Page } from '@playwright/test';

export class MenuPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async goToMenu(menuLink: string, menuName: string){
        await this.page.getByRole('link', { name: menuLink }).click();
        await expect(this.page.getByRole('link', { name: menuName, exact: true })).toBeVisible();
    }
}