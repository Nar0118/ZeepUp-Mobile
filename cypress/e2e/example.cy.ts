// This test is just an example. It must be deleted when the project is set up.
// Learn more about writing E2E tests with cypress here:  https://docs.cypress.io/guides/end-to-end-testing/testing-your-app
describe('Example E2E test', () => {
  it('Verify Text', () => {
    cy.visit('http://localhost:8081/');
    cy.get("div[id='root']").should('exist');
  });
});
