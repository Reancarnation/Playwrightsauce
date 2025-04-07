export function loginstandarduser {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="title"]')).toBeVisible();
    await expect (page.locator('[data-test="title"]')).toHaveText('Products');
}



}