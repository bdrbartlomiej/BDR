import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');
  await expect(page.locator('h2')).toContainText('Discount 20% For All Orders Over $2000');

  //css
  // await page.locator('css=#app > div > main > div.mt-15 > div > div:nth-child(2) > a > span').click()

  //xpath 
  // await page.locator('//div[2]/a/span[contains(text(),"Shop women")]').click();

  // playwright
  await page.getByRole('link', { name: 'Shop women' }).click();
  await expect(page.getByRole('main')).toContainText('Alphaboost shoes');
});
