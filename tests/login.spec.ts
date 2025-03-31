import { test , Page , expect, BrowserContext} from "@playwright/test";

test.beforeEach('go to webpage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    });

test('login with standard user', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="title"]')).toBeVisible();
    await expect (page.locator('[data-test="title"]')).toHaveText('Products');
});

test('login with locked out user', async ({page}) => {
    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="error"]')).toBeVisible();
    await expect (page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

