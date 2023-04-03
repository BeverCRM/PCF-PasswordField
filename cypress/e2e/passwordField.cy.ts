describe('password field', () => {
  beforeEach(() => {
    cy.fixture('user').then(user => {
      cy.login(user.userName, user.password);
    });
  });

  it('password visibility', () => {
    cy.on('uncaught:exception', err => {
      if (err.message
        .includes('Cannot read properties of undefined (reading \'addOnFocusHandler\')')) {
        return false;
      }
    });

    cy.fixture('record.json').then(record => {
      cy.visit(`main.aspx?` +
        `appid=${record.appId}` +
        `&pagetype=entityrecord` +
        `&etn=${record.entityName}` +
        `&id=${record.recordId}`);

      cy.get('.BeverControls_PasswordField-field').eq(1).as('input');
      cy.get('.BeverControls_PasswordField-reveal').eq(1).as('icon');

      cy.get('@input').should('have.attr', 'type', 'password');

      cy.get('@icon').click({ force: true });
      cy.get('@input').should('have.attr', 'type', 'text');

      cy.get('@icon').click({ force: true });
      cy.get('@input').should('have.attr', 'type', 'password');
    });
  });
});
