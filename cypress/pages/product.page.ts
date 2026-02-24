import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
    private readonly ADD_TO_CART_BUTTON = "#add-to-cart-button";
    private readonly PRODUCT_TITLE = "#productTitle";
    private readonly CART_CONFIRMATION = "#attach-view-cart-button-form, #sw-atc-details-single-container";

    verifyPageLoaded() {
        this.waitForVisibility(this.PRODUCT_TITLE);
        return this;
    }

    addToCart() {
        cy.get(this.ADD_TO_CART_BUTTON).click();
        return this;
    }

    goToCart() {
        cy.get("body").then(($body) => {
            if ($body.find("#attach-view-cart-button").length > 0) {
                cy.get("#attach-view-cart-button").click();
            } else if ($body.find("#sw-gtc").length > 0) {
                cy.get("#sw-gtc").click();
            } else {
                cy.get("#nav-cart").click();
            }
        });
    }
}

export const productPage = new ProductPage();
