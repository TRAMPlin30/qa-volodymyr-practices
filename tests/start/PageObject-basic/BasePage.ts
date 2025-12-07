import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {this.page = page;}
  
  async navigate(url: string) {await this.page.goto(url);}
  async getTitle(): Promise<string> {return this.page.title();}

  
  
  async click(locator: Locator | string) {
    if (typeof locator === 'string') {
      await this.page.click(locator);
    } else {
      await locator.click();
    }
  }

  async fill(locator: Locator | string, text: string) {
    if (typeof locator === 'string') {
      await this.page.fill(locator, text);
    } else {
      await locator.fill(text);
    }
  }

  async waitForURL(urlPart: string) {
    await this.page.waitForURL(`**${urlPart}**`);
  }
}