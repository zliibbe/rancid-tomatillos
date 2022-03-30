describe('Main movie view', () => {
    it('Should show user a dashboard with sorted movies displayed', () => {
        cy.visit('http://localhost:3000/')
        .contains('Rancid Tomatillos')
        .get('.movie-card')
        .contains('2067')
    });

    it('shows an individual movie\'s details when a user clicks on a movie poster', () => {
        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        .get('.movie-title')
        .contains('2067')
    })

    it('allows the user to return to main dashboard after viewing an individual movie', () => {
        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        cy.get('.back-to-main')
        .click()
        .get('.movie-card')
        .contains('2067')
    })
    
    it('navigates to a unique URL for each movie selected', () => {
        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        .url()
        .should('include', '/528085')
    })
    
  });