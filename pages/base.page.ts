import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("http://localhost:3000/");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnAnyButton(option: Locator) {
    await option.click();
  }

  async fillTextField(option: Locator, text: string) {
    await option.fill(text);
  }
}
