// pages/homePage.js
const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.getInTouchLink = this.page.getByRole('link', { name: 'GET IN TOUCH' });
        this.nameField = this.page.locator('#id_name');
        this.emailField = this.page.locator('#id_email');
        this.phoneField = this.page.locator('#id_phone_no');
        this.companyField = this.page.locator('#id_company_name');
        this.descriptionField = this.page.locator('#id_description');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }

    async goto() {
        await this.page.goto('/');
    }

    async verifyTitle(expectedTitle) {
        const title = await this.page.title();
        await expect(title).toBe(expectedTitle);
    }

    async fillForm(formData) {
        await this.getInTouchLink.click();
        await this.nameField.fill(formData.name);
        await this.emailField.fill(formData.email);
        await this.phoneField.fill(formData.phone);
        await this.companyField.fill(formData.company);
        await this.descriptionField.fill(formData.description);
        await this.submitButton.click();
    }
}

module.exports = HomePage;
