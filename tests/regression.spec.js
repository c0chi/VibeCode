// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// 1. Page loads with correct title
test('page title', async ({ page }) => {
  await expect(page).toHaveTitle('Datum — Data That Decides');
});

// 2. Nav — logo and all four links present
test('nav logo and links', async ({ page }) => {
  await expect(page.locator('.nav__logo')).toContainText('DATUM.');
  await expect(page.locator('#navLinks')).toContainText('About');
  await expect(page.locator('#navLinks')).toContainText('Services');
  await expect(page.locator('#navLinks')).toContainText('Approach');
  await expect(page.locator('#navLinks')).toContainText('Contact');
});

// 3. Hero — h1 text and CTA links to #contact
test('hero section', async ({ page }) => {
  const h1 = page.locator('.hero__headline');
  await expect(h1).toContainText('We turn data');
  await expect(h1).toContainText('into decisions.');
  const cta = page.locator('.hero .btn--primary');
  await expect(cta).toHaveAttribute('href', '#contact');
});

// 4. All major sections exist
test('major sections present', async ({ page }) => {
  for (const id of ['values', 'services', 'manifesto', 'problems', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  await expect(page.locator('footer')).toBeAttached();
});

// 5. Nav gets .scrolled class after scrolling past 40 px
test('nav scrolled class', async ({ page }) => {
  const nav = page.locator('.nav');
  await expect(nav).not.toHaveClass(/scrolled/);
  await page.evaluate(() => window.scrollTo(0, 100));
  await expect(nav).toHaveClass(/scrolled/);
});

// 6. Hamburger menu toggles .open on navLinks
test('hamburger menu toggle', async ({ page }) => {
  // Force mobile viewport so hamburger is visible
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const navLinks = page.locator('#navLinks');
  await expect(navLinks).not.toHaveClass(/open/);

  await page.locator('#hamburger').click();
  await expect(navLinks).toHaveClass(/open/);

  await page.locator('#hamburger').click();
  await expect(navLinks).not.toHaveClass(/open/);
});

// 7. Contact form fields exist and are required
test('contact form fields', async ({ page }) => {
  await expect(page.locator('#name')).toBeAttached();
  await expect(page.locator('#email')).toBeAttached();
  await expect(page.locator('#message')).toBeAttached();
  await expect(page.locator('#name')).toHaveAttribute('required', '');
  await expect(page.locator('#email')).toHaveAttribute('required', '');
  await expect(page.locator('#message')).toHaveAttribute('required', '');
});

// 8. Empty form submission — no success message
test('form validation: empty submit shows no success', async ({ page }) => {
  await page.locator('#contact .form__submit').click();
  await expect(page.locator('#formSuccess')).not.toBeVisible();
});

// 9. Bad email — no success message, email input focused
test('form validation: bad email shows no success', async ({ page }) => {
  await page.locator('#name').fill('Test User');
  await page.locator('#email').fill('not-an-email');
  await page.locator('#message').fill('Hello there');
  await page.locator('#contact .form__submit').click();
  await expect(page.locator('#formSuccess')).not.toBeVisible();
  await expect(page.locator('#email')).toBeFocused();
});

// 10. Valid submission — button shows "Sending…" then success message appears
test('form submission: valid data shows success', async ({ page }) => {
  await page.locator('#name').fill('Jane Smith');
  await page.locator('#email').fill('jane@example.com');
  await page.locator('#message').fill('I would like to work with you.');

  const submitBtn = page.locator('#contact .form__submit');
  await submitBtn.click();

  await expect(submitBtn).toContainText('Sending\u2026');
  await expect(page.locator('#formSuccess')).toBeVisible({ timeout: 2000 });
});
