import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "https://www.amazon.de",
        viewportWidth: 1280,
        viewportHeight: 720,
        retries: {
            runMode: 2,
            openMode: 0,
        },
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 30000,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.cy.ts",
        supportFile: "cypress/support/e2e.ts",
        testIsolation: false,
    },
});
