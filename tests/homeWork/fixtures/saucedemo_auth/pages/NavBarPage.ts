import { Locator, Page } from '@playwright/test'


export class NavBarPage {

  private page: Page;
  private burgerMenu: Locator;
  private shoppingCart: Locator;

  constructor(page: Page) {this.page = page;

    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.shoppingCart = page.locator('#shopping_cart_link');
  }


  async openBurgerMenu() {
    await this.burgerMenu.click();
  }

  async openShoppingCart() {
    await this.shoppingCart.click();
  }


}







