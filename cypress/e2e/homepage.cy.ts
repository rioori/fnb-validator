describe('Homepage', () => {
  it('loads successfully and shows hero heading', () => {
    cy.visit('/');
    cy.contains('Validate & optimize').should('exist');
  });
});

