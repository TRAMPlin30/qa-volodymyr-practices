import { Page } from '@playwright/test'

export class SignInPage {

    private page: Page;

  // Локаторы
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = '#loginBtn';

  constructor(page: Page) {this.page = page;}

  async goto() {
    //await this.page.goto('https://example.com/login');
    console.log("go to is working from SignInPAge")
  }

  async login(username: string, password: string) {
    //await this.page.fill(this.usernameInput, username);
    //await this.page.fill(this.passwordInput, password);
    //await this.page.click(this.loginButton);

    console.log("login is working from SignInPAge" + username + password)
  }

  async someTestMethod() {
    //await this.page.goto('https://example.com/login');
    console.log("test class SignInPage")
  }



}



