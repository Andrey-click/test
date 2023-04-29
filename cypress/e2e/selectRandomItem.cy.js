import {CartPage} from "../pages/cartPage.js";

describe("template spec", () => {

  const cart = new CartPage();
  it('WEB-T3 should add item to cart and then purchase it', () => {
    cy.visit("https://www.demoblaze.com/");
    cart.selectRandomItemFunctionality()
  })
})
