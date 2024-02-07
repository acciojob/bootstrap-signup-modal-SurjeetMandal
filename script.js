describe('Modal Test', () => {
  it('should open the modal and submit the form', () => {
    // Visit the page containing the modal
    cy.visit('your_page_url_here');

    // Click the button to open the modal
    cy.get('.btn-danger').click();

    // Wait for the modal to become visible
    cy.get('#exampleModal').should('be.visible', { timeout: 10000 }); ;

    // Fill out the form fields
    cy.get('#exampleInputEmail1').type('test@example.com');
    cy.get('#exampleInputPassword1').type('password123');
    cy.get('#exampleInputPassword2').type('password123');

    // Submit the form
    cy.get('.btn-success').click();

    // Wait for the modal to close
    cy.get('#exampleModal').should('not.be.visible');
  });
});
