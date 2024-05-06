import { expect, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config()

export class LoginPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async loginToShop(){
        await this.page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
        await this.page.getByLabel('Show user menu').click();
        await this.page.getByRole('link', { name: 'LOGIN' }).click();
        await this.page.getByPlaceholder('Email').fill(process.env.LOGIN!);
        await this.page.getByPlaceholder('Password').fill(process.env.PASSWORD!);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText('Logged in successfully')).toBeVisible();
    }
    async signedOut(){
        await this.page.getByLabel('Show user menu').click();
        await this.page.getByRole('link', { name: 'LOGOUT' }).click();
        await expect(this.page.getByText('Signed out successfully.')).toBeVisible();
    }
}