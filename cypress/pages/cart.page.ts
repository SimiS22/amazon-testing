import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    private readonly QUANTITY_SELECT = "select[name='quantity']";
    private readonly PROCEED_TO_CHECKOUT = "input[name='proceedToRetailCheckout']";

    verifyInCart() {
        cy.url().should("include", "/cart");
        return this;
    }

    changeQuantity(quantity: number) {
        cy.acceptCookies();
        cy.get("body").then(($body) => {
            const select = $body.find(this.QUANTITY_SELECT);
            if (select.length > 0 && select.is(":visible")) {
                cy.get(this.QUANTITY_SELECT).select(quantity.toString(), { force: true });
            } else {
                const targetPlusButton = 'button[data-action="a-stepper-increment"], [data-action="quantity-stepper-plus"], .a-step-button-plus, button:contains("+")';
                cy.get(targetPlusButton).first().parent().then(($container) => {
                    const currentValText = $container.text().trim();
                    const currentVal = parseInt(currentValText.match(/\d+/)?.[0] || "1");
                    const clicksNeeded = quantity - currentVal;

                    if (clicksNeeded > 0) {
                        for (let i = 0; i < clicksNeeded; i++) {
                            cy.get(targetPlusButton).first().click({ force: true });
                            cy.wait(1000); // Wait for UI update
                        }
                    }
                });
            }
        });
        cy.contains(/Subtotal|Zwischensumme/i, { timeout: 15000 }).should("be.visible");
        return this;
    }

    proceedToCheckout() {
        cy.get("body").then(($body) => {
            if ($body.find(this.PROCEED_TO_CHECKOUT).length > 0) {
                cy.get(this.PROCEED_TO_CHECKOUT).click();
            } else {
                cy.get('input[name="proceedToRetailCheckout"], #sc-buy-box-ptc-button, [data-feature-id="proceed-to-checkout-action"]')
                    .first()
                    .click({ force: true });
            }
        });
    }
}

export const cartPage = new CartPage();
