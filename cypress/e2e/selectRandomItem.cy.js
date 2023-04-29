import { MainPage } from "../pages/mainPage";

describe("template spec", () => {

  const web = new MainPage();
  it('WEB-T3 should add item to cart and then purchase it', () => {
    cy.visit("https://www.demoblaze.com/");
    web.selectRandomItemFunctionality()
  })
})
