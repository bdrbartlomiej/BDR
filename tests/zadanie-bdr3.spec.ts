import { test, expect, Page } from '@playwright/test';


async function goToEvershopPage(page: Page) {
    await page.goto('https://demo.evershop.io/');
    await expect(page.locator('.logo-icon')).toBeVisible();
}


async function goToKids(page: Page, MenuName: string, HeadingName: string ) {
    await page.getByRole('link', { name: MenuName }).click();
    await expect(page.getByRole('heading', { name: HeadingName })).toBeVisible();
}


async function goToShoesDetails(page: Page, ShoesName: string ) {
    await page.locator('a').filter({ hasText: /^Chuck taylor all star$/ }).click();
    //await page.getByRole('heading', { name: ShoesName }).click();
}


async function addToCartShoes(page: Page, ShoesSize: string, ShoesColor: string ) {
    await page.getByRole('link', { name: ShoesSize, exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: ShoesColor }).click();
    await page.waitForTimeout(3000);
    //await page.getByPlaceholder('Qty').click();
    //await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.waitForTimeout(3000);


}


test('Dodanie butów dziecięcych do koszyka: M, kolor: red', async ({ page }) => {
  await goToEvershopPage(page)
  await goToKids(page, 'Shop kids', 'Kid')
  await goToShoesDetails(page, 'Chuck taylor all star')
  await addToCartShoes(page, 'M', 'Red')


});


test('Dodanie butów dziecięcych do koszyka: L, kolor: black', async ({ page }) => {
    await goToEvershopPage(page)
    await goToKids(page, 'Shop kids', 'Kid')
    await goToShoesDetails(page, 'Chuck taylor all star')
    await addToCartShoes(page, 'L', 'Black')
  
  });
