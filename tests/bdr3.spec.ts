import { test, expect } from '@playwright/test';

async function goToWWW(page: Page) {
    await page.goto('https://demo.evershop.io/');
    await expect(page.locator('.logo-icon')).toBeVisible();
}

async function goToShoename(page: Page, shoeName: string) {
    await page.locator('a').filter({ hasText: shoeName }).click();
    await expect(page.getByRole('heading', { name: shoeName })).toBeVisible();
}

test('test', async ({ page }) => {
  await goToWWW(page)

  await page.getByRole('link', { name: 'Men', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Men' })).toBeVisible();
  await page.locator('a').filter({ hasText: 'Nizza trefoil shoes' }).click();
  await expect(page.getByRole('heading', { name: 'Nizza trefoil shoes' })).toBeVisible();
  await page.getByRole('link', { name: 'M', exact: true }).click();
  await page.getByRole('link', { name: 'White' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();

});