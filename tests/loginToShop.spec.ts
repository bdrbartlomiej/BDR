import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage'

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.loginToShop();
})

test.afterEach(async () => {
    await loginPage.signedOut();
})

test('logowanie do sklepu', async ({ page }) => {
    await page.locator('#header').getByRole('link', { name: 'Fashion Marketplace' }).click();
    await page.getByRole('link', { name: 'Women Women' }).click();
    await page.getByRole('link', { name: 'Midi Skirt With Bottoms Midi' }).click();
    await expect(page.getByRole('heading', { name: 'Midi Skirt With Bottoms' })).toBeVisible();
});