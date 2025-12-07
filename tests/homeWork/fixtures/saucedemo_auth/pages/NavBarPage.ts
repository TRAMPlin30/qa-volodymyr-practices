import { Locator, Page } from '@playwright/test'


export class NavBarPage {

  private page: Page;
  private burgerMenu: Locator;
  private shoppingCart: Locator;
  private allItemsLink: Locator;
  private aboutLink: Locator;
  private logoutLink: Locator;
  private resetAppLink: Locator;


  constructor(page: Page) {this.page = page;

    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.aboutLink = page.locator('#about_sidebar_link');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.resetAppLink = page.locator('#reset_sidebar_link');
  }


  async openBurgerMenu() {
    await this.burgerMenu.click();
  }

  async openShoppingCart() {
    await this.shoppingCart.click();
  }

  async allItemsLink_click() {
    await this.allItemsLink.click();
  }

  async aboutLink_click() {
    await this.aboutLink.click();
  }

  async logoutLink_click() {
    await this.logoutLink.click();
  }

  async resetAppLink_click() {
    await this.resetAppLink.click();
  }




}







