import { Page } from '@playwright/test'

export class SignUpPage {

  private page: Page;
    
  // Локаторы
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = '#loginBtn';
    
  constructor(page: Page) {this.page = page;}
    
  async goto() {
    //await this.page.goto('https://example.com/login');
    console.log("go to is working from SignUpPAge")
  }

  async signUp(username: string, password: string) {
    //await this.page.fill(this.usernameInput, username);
    //await this.page.fill(this.passwordInput, password);
    //await this.page.click(this.loginButton);

    console.log("signUp is working from SignUpPAge" + username + password)
  }

    
    
    
}
