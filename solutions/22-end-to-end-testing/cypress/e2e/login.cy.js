describe('login', () => {
  it('shows logged-in user\'s username', () => {
    cy.visit('/');
    cy.login();
    cy.findByRole('link', { name: /Log In/i }).should('not.exist');
    cy.findByText(/Tester/i);
  });
});
