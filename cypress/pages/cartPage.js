import {locators} from "../locators/index";
import {user} from "../fixtures/example.json"
export class CartPage {



    get bodyMainElement() {
        return cy.get(locators.bodyMainElement);
    }

    get cartBtn() {
        return cy.get(locators.cartBtn);
    }

    get laptopsBtn() {
        return cy.get(locators.laptopsBtn);
    }

    get deleteItemBtn() {
        return cy.get(locators.deleteItemBtn);
    }

    get sonyVaioi5() {
        return cy.get(locators.sonyVaioi5);
    }

    get successBtn() {
        return cy.get(locators.successBtn);
    }

    get phonesBtn() {
        return cy.get(locators.phonesBtn);
    }

    get phonesListTitles() {
        return cy.get(locators.phonesListTitles);
    }

    get productName() {
        return cy.get(locators.productName);
    }

    get userNameInput() {
        return cy.get(locators.userNameInput);
    }

    get userCountryInput() {
        return cy.get(locators.userCountryInput);
    }
    get userCityInput() {
        return cy.get(locators.userCityInput);
    }

    get userCardInput() {
        return cy.get(locators.userCardInput);
    }

    get monthInput() {
        return cy.get(locators.monthInput);
    }

    get yearInput() {
        return cy.get(locators.yearInput);
    }

    get purchaseBtn() {
        return cy.get(locators.purchaseBtn);
    }

    get successPurchaseAlert() {
        return cy.get(locators.successPurchaseAlert);
    }




    addToCartFunctionality = () => {
        this.laptopsBtn.click();
        cy.wait(500);
        this.bodyMainElement
            .should("not.include.text", "Samsung galaxy");
        this.sonyVaioi5.click();
        this.successBtn.click();

        cy.on('window:alert', (str) => expect(str).to.equal('Product added'));

        this.cartBtn.click();
        this.bodyMainElement
            .should("include.text", "Sony vaio i5");

        this.deleteItemBtn.click();
        this.bodyMainElement
            .should("not.include.text", "Sony vaio i5");
    };

    fillOrderForm(username, country, city, card, month, year) {
        this.userNameInput.type(username);
        this.userCountryInput.type(country);
        this.userCityInput.type(city);
        this.userCardInput.type(card);
        this.monthInput.type(month);
        this.yearInput.type(year);
    }



    purchaseAlertMessage = (cardNumber, name) => {
        const alert = this.successPurchaseAlert;
        alert.should('exist');

        const values = [
            `Card Number: ${cardNumber}`,
            `Name: ${name}`,
        ];

        values.forEach(value => {
            alert.should('contain.text', value);
        });
        alert.should("include.text", "Thank you for your purchase!")

        return true;
    };

    selectRandomItemFunctionality = () => {

// Select a random item from Phones category
        this.phonesBtn.click();
        this.phonesListTitles.its('length').then(($count) => {
            const randomIndex = Math.floor(Math.random() * $count);
            this.phonesListTitles.eq(randomIndex).click();
        });

// Make an assertion
        this.productName.then(($name) => {
            const productName = $name.text();
            this.productName.should('contain', productName);
        });

// Click Button Add to the Cart
        this.successBtn.click();

// Close alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });

// Go to Cart
        this.cartBtn.click();

// Click Place Order
        this.successBtn.click();

// Fill the Place Order
        this.fillOrderForm(
            user.userName,
            user.userCountry,
            user.userCity,
            user.userCard,
            user.month,
            user.year
        );

// Click a Purchase
        this.purchaseBtn.click();
        expect(this.purchaseAlertMessage(user.userCard, user.userName)).to.be.true;
    };
}