import {locators} from "../locators/index";
export class MainPage {

    checkPageElements = () => {
        const elements = ['Home', 'Contact', 'About us', 'Cart', 'Log in', 'Sign up']

        elements.forEach(element => {
            cy.contains(element)
        })
    }

    checkNavigationElementsExist = () => {
        const navigationElements = [
            { name: 'Home button', locator: locators.homeBtn },
            { name: 'Contact button', locator: locators.contactBtn },
            { name: 'About Us button', locator: locators.aboutUsBtn },
            { name: 'Cart button', locator: locators.cartBtn },
            { name: 'Log In button', locator: locators.logInBtn },
            { name: 'Sign Up button', locator: locators.signUpBtn },
        ];
        navigationElements.forEach((element) => {
            cy.get(element.locator).should('exist');
        });
    };
}