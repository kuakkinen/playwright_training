import {test, expect} from '@playwright/test';

test('eka testi', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('nauhoitettu', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('button', { name: 'Hylkää kaikki' }).click();
  await page.getByRole('combobox', { name: 'Hae' }).click();
  await page.getByRole('combobox', { name: 'Hae' }).fill('koripallo');
  await page.locator('iframe[name="a-lbhcnim95vvs"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-lbhcnim95vvs"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-lbhcnim95vvs"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-lbhcnim95vvs"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-lbhcnim95vvs"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Koripallo Wikipedia https://' }).click();
  await page.getByText('Koripallo on urheilulaji ja p').click();
  await page.getByText('Koripallokentän alusta on').click();
  await page.getByText('Kentässä on viivoilla').click();
});