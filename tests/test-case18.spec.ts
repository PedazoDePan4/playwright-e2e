import { test, expect } from '@playwright/test';


test.describe('Case 18', () => {

    test('case18-success', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.locator('div').filter({ hasText: 'Category Women Dress Tops' }).nth(2).click();
        await page.getByRole('heading', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: 'Dress' }).click();
        await page.locator('div').filter({ hasText: 'Women - Dress Products ' }).nth(2).click();
        await page.getByRole('heading', { name: 'Women - Dress Products' }).click();
        await page.getByRole('link', { name: ' Men' }).click();
        await page.getByRole('link', { name: 'Tshirts' }).click();
        await page.getByRole('heading', { name: 'Men - Tshirts Products' }).click();
        await page.getByText('Men - Tshirts Products ').click();
    });

    test('case18-fail', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.locator('div').filter({ hasText: 'Category Women Dress Tops' }).nth(2).click();
        await page.getByRole('heading', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: ' Women' }).click();
        await page.getByRole('link', { name: 'Dres' }).click();
        await page.locator('div').filter({ hasText: 'Women - Products ' }).nth(2).click();
        await page.getByRole('heading', { name: 'Women - Products' }).click();
        await page.getByRole('link', { name: ' Men' }).click();
        await page.getByRole('link', { name: 'Tshirts' }).click();
        await page.getByRole('heading', { name: 'Men - Products' }).click();
        await page.getByText('Men - Products ').click();
    });
});