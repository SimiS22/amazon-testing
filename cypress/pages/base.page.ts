export abstract class BasePage {
    visit(path: string = "/") {
        cy.visit(path);
        return this;
    }

    protected waitForVisibility(selector: string, timeout: number = 10000) {
        return cy.get(selector, { timeout }).should("be.visible");
    }

    protected getById(id: string) {
        return cy.get(`#${id}`);
    }

    protected getByDataAttr(attr: string, value: string) {
        return cy.get(`[data-${attr}="${value}"]`);
    }
}
