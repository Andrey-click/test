import { MainPage } from "../pages/mainPage";

describe("template spec", () => {

  const web = new MainPage();

  it("WEB-T2 - Check Main Elements", () => {
    cy.visit('https://www.demoblaze.com/')

    web.checkNavigationElementsExist();
    web.checkPageElements();
  });
});
