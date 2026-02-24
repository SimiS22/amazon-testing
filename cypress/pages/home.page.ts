import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    private readonly SEARCH_INPUT = "#twotabsearchtextbox";
    private readonly SEARCH_SUBMIT = "#nav-search-submit-button";

    searchFor(term: string) {
        cy.acceptCookies();
        this.waitForVisibility(this.SEARCH_INPUT).clear().type(term);
        cy.get(this.SEARCH_SUBMIT).click();
    }
}

export const homePage = new HomePage();
