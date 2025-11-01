import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/register.page";
import TestData from '../data/testData.json';

let registerPage: RegisterPage;
test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  await registerPage.navigateTo();
});
test.describe("Validate singUp elements and scenarios", () => {
  test("TC-1 Verify singup elements are visible", async ({ page }) => {
    await expect(registerPage.locators.emailInput).toBeInViewport();
    await expect(registerPage.locators.firstNameInput).toBeInViewport();
    await expect(registerPage.locators.lastNameInput).toBeInViewport();
    await expect(registerPage.locators.passwordInput).toBeInViewport();
    await expect(registerPage.locators.registerButton).toBeInViewport();
  });

  test("TC-2 Verify signUp button is not enabled by default", async ({
    page,
  }) => {
    await expect(registerPage.locators.registerButton).toBeDisabled();
  });

  test("TC-3 Verify signup button is enabled after filling the mandatory fields", async ({
    page,
  }) => {
    await registerPage.registerProcessCompleted(TestData.usuarioValido);
    await expect(registerPage.locators.registerButton).toBeEnabled();
  });
});
