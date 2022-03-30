describe('Main movie view', () => {
    it('Should show user a dashboard with sorted movies displayed', () => {
       
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", 
            {
            "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]}
      )
        cy.visit('http://localhost:3000/')
        .contains('Rancid Tomatillos')
        .get('.movie-card')
        .contains('2067')
    });

    it('shows an individual movie\'s details when a user clicks on a movie poster', () => {
        cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]
      })
        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        .get('.movie-title')
        .contains('2067')
    })

    it('allows the user to return to main dashboard after viewing an individual movie', () => {
        cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]
      })
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
        cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]
      })
        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        .url()
        .should('include', '/528085')
    })
    
    it('navigates to base URL when exiting single movie view', () => {
        cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]
      })

        cy.visit('http://localhost:3000/')
        .get('.movie-card')
        .first()
        .click()
        cy.get('.back-to-main')
        .click()
        .url()
        .should('include', '/')
    })

    it('', () => {
        cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        "movies": [
            {
                "id": 528085,
                "poster_path": "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                "title": "2067",
                "average_rating": 5.166666666666667,
                "release_date": "2020-10-01"
              },
              {
                "id": 613504,
                "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
                "title": "After We Collided",
                "average_rating": 5.25,
                "release_date": "2020-09-02"
              }
        ]
      })
    })
  });