/// <reference types="cypress" />

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to accept cookies if the modal is present.
             * @example cy.acceptCookies()
             */
            acceptCookies(): Chainable<void>;

            /**
             * Custom command to search for a term on Amazon.
             * @param term The search term to enter.
             * @example cy.searchAmazon('kinderschuhe')
             */
            searchAmazon(term: string): Chainable<void>;

            /**
             * Custom command to wait for dynamic elements with retries.
             * @param selector The selector to wait for.
             * @param options Custom options for timeout.
             */
            waitForElement(selector: string, timeout?: number): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.Commands.add("acceptCookies", () => {
    cy.get("body").then(($body) => {
        if ($body.find("#sp-cc-accept").length > 0) {
            cy.get("#sp-cc-accept").click();
        }
    });
});

Cypress.Commands.add("searchAmazon", (term: string) => {
    cy.get("#twotabsearchtextbox")
        .should("be.visible")
        .clear();
    cy.get("#twotabsearchtextbox")
        .type(`${term}{enter}`);
});

Cypress.Commands.add("waitForElement", (selector: string, timeout: number = 10000) => {
    return cy.get(selector, { timeout }).should("exist").and("be.visible");
});

export { };
