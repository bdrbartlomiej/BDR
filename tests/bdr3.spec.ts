import { test, expect, Page } from '@playwright/test';

async function goToEvershop(page: Page) {
    await page.goto('https://demo.evershop.io/');
    await expect(page.locator('.logo-icon')).toBeVisible();
}

async function goToMenu(page: Page, menuName: string, headingName: string ) {
    await page.getByRole('link', { name: menuName }).click();
    await expect(page.getByRole('heading', { name: headingName })).toBeVisible();
}

async function goToShoesDetails(page: Page, shoesName: string ) {
    await page.locator('a').filter({ hasText: shoesName }).click();
    await expect(page.getByRole('heading', { name: shoesName })).toBeVisible();
}
async function addToCart(page: Page, shoesSize: string, shoesColor ) {
    await page.getByRole('link', { name: shoesSize, exact: true }).click();
    await page.getByRole('link', { name: shoesColor }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
}

test('Dodanie damskich butów do koszyka', async ({ page }) => {
  await goToEvershop(page)
  await goToMenu(page, 'Shop women', 'Women' )
  await goToShoesDetails(page, 'Alphaedge 4d reflective shoes')
  await addToCart(page, 'XL', 'White') 
});

test('Dodanie męskich butów do koszyka', async ({ page }) => {
    await goToEvershop(page)
    await goToMenu(page, 'Shop men', 'Men' )
    await goToShoesDetails(page, 'Hacked fashion chuck taylor')
    await addToCart(page, 'S', 'Brown') 
});