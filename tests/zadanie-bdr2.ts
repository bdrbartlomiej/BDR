import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');

  await expect(page.locator('h2')).toContainText('Discount 20% For All Orders Over $2000');

  await page.getByRole('link', { name: 'Men', exact: true }).click();

  await page.getByRole('link', { name: 'Nizza trefoil shoes' }).first().click();

  await expect(page.locator('h1')).toContainText('Nizza trefoil shoes');
});
