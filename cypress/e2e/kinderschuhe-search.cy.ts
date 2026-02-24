import { homePage } from "../pages/home.page";
import { searchResultsPage } from "../pages/search.page";
import { productPage } from "../pages/product.page";
import { cartPage } from "../pages/cart.page";

describe("Amazon Kinderschuhe Search and Checkout Flow", () => {
    it("should complete the full search-to-checkout flow for 'kinderschuhe'", () => {
        cy.log("Step 1: Visit Amazon and search for 'kinderschuhe'");
        homePage.visit("/");
        homePage.searchFor("kinderschuhe");
        searchResultsPage.waitForResults();

        cy.log("Select the second product from search results");
        searchResultsPage.clickOnProductAtIndex(1);

        cy.log("Verify product page and add to cart");
        productPage.verifyPageLoaded();
        productPage.addToCart();
        cy.log("Go to cart and verify product is present");
        productPage.goToCart();
        cartPage.verifyInCart();

        cy.log("Increase quantity to 3");
        cartPage.changeQuantity(3);

        cy.log("Proceed to checkout");
        cartPage.proceedToCheckout();

        cy.url().should("include", "/signin");
    });
});
