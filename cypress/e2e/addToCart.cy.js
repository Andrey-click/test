import { CartPage } from "../pages/cartPage";

describe("template spec", () => {

  const cart = new CartPage();
  it('WEB-T1 should add item to cart and then delete it', () => {
    cy.visit('https://www.demoblaze.com/')
    cart.addToCartFunctionality()
  })
})
