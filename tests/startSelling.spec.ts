import { fakerPL } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('Stworzenie nowego sprzedawcy', async ({ page }) => {
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
  await page.getByRole('link', { name: 'Start Selling' }).click();
  await page.locator('#spree_vendor_contact_details_attributes_name').fill(fakerPL.person.firstName());
  await page.getByPlaceholder('Surname*').fill(fakerPL.person.lastName());
  await page.getByPlaceholder('Job Title*').fill(fakerPL.person.jobTitle());
  await page.locator('#spree_vendor_contact_details_attributes_email').fill(fakerPL.internet.email());
  await page.locator('#spree_vendor_contact_details_attributes_phone').fill(fakerPL.phone.number());
  await page.getByPlaceholder('website').fill(fakerPL.internet.url());
  await page.getByPlaceholder('Vendor Name*').fill(fakerPL.company.name());
  await page.getByPlaceholder('Description*').fill(fakerPL.lorem.words(4));
  await page.getByLabel('Logo*').setInputFiles('resources/logo.png');
  await page.locator('#spree_vendor_email').fill(fakerPL.internet.email({provider: 'example.com' }));
  await page.locator('#spree_vendor_stock_location_name').fill(fakerPL.location.city());
  await page.getByText('Default').first().check();
  await page.getByPlaceholder('Street Address*').fill(fakerPL.location.street() + ' ' + fakerPL.number.int({max: 20}));
  // Rozne zapisy polaczonych stringow
  // `${fakerPL.location.street()} ${fakerPL.number.int({max: 20})}`
  // fakerPL.location.street() + ' ' + fakerPL.number.int({max: 20}
  await page.getByPlaceholder('City*').fill(fakerPL.location.city());
  await page.getByPlaceholder('Zip*').fill(fakerPL.location.zipCode());
  await page.locator('#spree_vendor_stock_location_phone').fill(fakerPL.phone.number());
  await page.getByLabel('Country*').selectOption('Poland');
  await page.getByLabel('State*').selectOption('Zachodniopomorskie');
  await page.getByPlaceholder('Email', { exact: true }).fill(fakerPL.internet.email({firstName: 'Rafal'}));
  const password = fakerPL.internet.password();
  await page.getByPlaceholder('Password', { exact: true }).fill(password);
  await page.getByPlaceholder('Password Confirmation').fill(password);
  await page.getByRole('button', { name: 'REQUEST VENDOR ACCOUNT' }).click();
});