import { BasePage } from "./base.page";

export class SearchResultsPage extends BasePage {
    private readonly RESULTS_CONTAINER = ".s-main-slot";
    private readonly PRODUCT_ITEM = 'div[data-component-type="s-search-result"]';
    private readonly PRODUCT_TITLE_LINK = "h2 a, .a-link-normal";

    waitForResults() {
        this.waitForVisibility(this.RESULTS_CONTAINER);
        return this;
    }

    clickOnProductAtIndex(index: number) {
        cy.get(this.PRODUCT_ITEM)
            .eq(index)
            .find(this.PRODUCT_TITLE_LINK)
            .first()
            .click();
    }
}

export const searchResultsPage = new SearchResultsPage();
