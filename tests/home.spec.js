// tests/homePage.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const fs = require('fs');

test("Verify Home page title", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyTitle("ASTONSYS | Leading Your Software To Success Through Quality");
});

test("Verify Other page title", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyTitle("ASTONSYS | Leading Your Software To Success Through Qualyity");
});

test("Verify Get in Touch form submission", async ({ page }) => {
    const homePage = new HomePage(page);
    const formData = JSON.parse(fs.readFileSync('./data/formData.json', 'utf-8'));

    await homePage.goto();
    await homePage.fillForm(formData);
});
