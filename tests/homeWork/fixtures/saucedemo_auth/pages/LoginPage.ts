import { Page } from '@playwright/test'
import { ParsUsers } from '../utils/parsUsers';

export class LoginPage {

private page: Page;

  private acceptedUsers = '#login_credentials';
  private usernameInput = 'user-name';
  private passwordInput = 'password';
  private loginButton = 'login-button';

  constructor(page: Page) {this.page = page;}


  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getUsersText(): Promise<string> {

    await this.page.waitForSelector(this.acceptedUsers);
    const usersLocator = this.page.locator(this.acceptedUsers);
    const text = await usersLocator.innerText();
    return text;
  }

  
  async getUsers(): Promise<string[]> {
    const text = await this.getUsersText();
    return ParsUsers.parseUsers(text);
  }

}



