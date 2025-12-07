import { Locator, Page } from '@playwright/test'
import { ParsUsers } from '../utils/parsUsers';

export class LoginPage {

  private page: Page;

  private acceptedUsers = '#login_credentials';
  private acceptedPassword = '[data-test="login-password"]'
  private loginButton: Locator;

  constructor(page: Page) {this.page = page;

    this.loginButton = page.getByRole('button', { name: 'Login' });
  }



  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.loginButton.click();
  }


  async getUsersText() {
    await this.page.waitForSelector(this.acceptedUsers);
    const usersLocator = this.page.locator(this.acceptedUsers);
    const text = await usersLocator.innerText();
    return text;
  }

  
  async getUsers() {
    const text = await this.getUsersText();
    console.log(ParsUsers.parseUsers(text));
    return ParsUsers.parseUsers(text);
  }

  
  async getPassword() {
    await this.page.waitForSelector(this.acceptedPassword);
    const text = (await this.page.locator(this.acceptedPassword).innerText()).replace('Password for all users:', '').trim();
    console.log(text);
    return text;
     
}

}



