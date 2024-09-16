describe('orders', () => {
  before(() => {
    cy.request('DELETE', '/api/orders');
  });
  it('user can view and delete orders', () => {
    cy.visit('/');
    cy.login();
    cy.checkout();
    cy.findByRole('link', { name: /Orders/i }).click();
    cy.findByRole('button', { name: /Delete Order/i }).click();
    cy.findByText(/No Orders/i);
  });
});
