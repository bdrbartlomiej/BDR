import { expect, type Page } from '@playwright/test';

export class ProductsPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async choseProduct(productLink: string, productName: string, size: string) {
        await this.page.getByRole('link', { name: productLink }).click();
        await expect(this.page.getByRole('heading', { name: productName })).toBeVisible();
        await this.page.getByLabel(size, { exact: true }).nth(1).click();
    }
}