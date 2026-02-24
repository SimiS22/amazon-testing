// This is the main entry point for Cypress support.
// It is processed and loaded automatically before your test files.
import "./commands";

// Hide fetch/XHR requests from the command log to keep it clean
const app = window.top;
if (app && !app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
}

// Global hook to handle uncaught exceptions (Amazon often has these)
/* eslint-disable @typescript-eslint/no-unused-vars */
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});
