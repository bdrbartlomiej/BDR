import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
});