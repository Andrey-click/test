import { MainPage } from "../pages/mainPage";

describe("template spec", () => {

  const web = new MainPage();
  it('WEB-T1 should add item to cart and then delete it', () => {
    cy.visit('https://www.demoblaze.com/')
    web.addToCartFunctionality()
  })
})
