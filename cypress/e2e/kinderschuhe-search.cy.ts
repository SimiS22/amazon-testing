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

    });
});
