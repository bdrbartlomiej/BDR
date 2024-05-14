import { test, expect } from '@playwright/test';
import { MenuPage } from '../pageObjects/menuPage';
import { ProductsPage } from '../pageObjects/productsPage';
import { fakerPL } from '@faker-js/faker';


let menu: MenuPage;
let product: ProductsPage;

test.beforeEach(async ({ page }) => {
    menu = new MenuPage(page)
    product = new ProductsPage(page)
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
})

test('kupienie produktu przez nowego uzytkownika', async ({ page }) => {
  await menu.goToMenu('Ambiance Men', 'Men');
  await product.choseProduct('Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.locator('#order_email').click();
  await page.locator('#order_email').fill('bartek@example.com');
  await page.getByRole('button', { name: 'Continue as a guest' }).click();
  await page.locator('css=#order_bill_address_attributes_firstname').fill(fakerPL.person.firstName());
  await page.locator('css=#order_bill_address_attributes_lastname').fill(fakerPL.person.lastName());
  await page.locator('css=#order_bill_address_attributes_address1').fill(fakerPL.location.street() + ' ' + fakerPL.number.int({max: 20}));
  await page.locator('css=#order_bill_address_attributes_city').fill(fakerPL.location.city());
  await page.locator('#order_bill_address_attributes_country_id').selectOption('Poland');
  await page.locator('css=#order_bill_address_attributes_state_id').selectOption('Zachodniopomorskie');
  await page.locator('css=#order_bill_address_attributes_zipcode').fill(fakerPL.location.zipCode());
  await page.locator('css=#order_bill_address_attributes_phone').fill(fakerPL.phone.number());
  await page.getByText('Order use billing').uncheck();

  await page.locator('#order_ship_address_attributes_firstname').fill(fakerPL.person.firstName());
  await page.locator('#order_ship_address_attributes_lastname').fill(fakerPL.person.lastName());
  await page.locator('#order_ship_address_attributes_country_id').selectOption('Poland');
  await page.locator('#order_ship_address_attributes_state_id').selectOption('Zachodniopomorskie');
  await page.locator('#order_ship_address_attributes_address1').fill(fakerPL.location.street() + ' ' + fakerPL.number.int({max: 20}));
  await page.locator('#order_ship_address_attributes_city').fill(fakerPL.location.city());
  await page.locator('#order_ship_address_attributes_zipcode').fill(fakerPL.location.zipCode());
  await page.locator('#order_ship_address_attributes_phone').fill(fakerPL.phone.number());1

  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.locator('label').filter({ hasText: 'Express WORLD' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.locator('label').filter({ hasText: 'Check' }).locator('span').click();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', { name: 'Order placed successfully' })).toBeVisible();
});