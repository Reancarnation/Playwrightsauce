import { test , Page , expect, BrowserContext} from "@playwright/test";

test.beforeEach('go to webpage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="title"]')).toBeVisible();
    await expect (page.locator('[data-test="title"]')).toHaveText('Products');
});

test('add one product to shoppingcart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect (page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    await expect (page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
});

test('add two products to shoppingcart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[]')
    await expect (page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    await expect (page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
})