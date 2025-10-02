import {test, expect, BrowserContext} from '@playwright/test';

let context: BrowserContext;
let page: any;

test.beforeAll( async ({browser}) => {
  context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });
  page = await context.newPage();
});

test.afterAll( async () => {
  await context.tracing.stop({ path: 'trace.zip' });
});


test('eka testi', async ({}) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('nauhoitettu', async ({}) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('button', { name: 'Hyväksy kaikki' }).click();
  await page.getByRole('combobox', { name: 'Hae' }).click();
  await page.getByRole('combobox', { name: 'Hae' }).fill('playwright');
});