describe("Favorite movie view", () => {
  it("Should show user a dashboard with movies that have been favorited", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
      {
        movies: [
          {
            id: 528085,
            poster_path:
              "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            title: "2067",
            average_rating: 5.166666666666667,
            release_date: "2020-10-01",
          },
          {
            id: 613504,
            poster_path:
              "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
            title: "After We Collided",
            average_rating: 5.25,
            release_date: "2020-09-02",
          },
        ],
      }
    ).as("getMovies");

    cy.intercept("GET", "http://localhost:3001/api/v1/starredMovies", {
      movies: [
        {
          id: 528085,
          poster_path:
            "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
          title: "2067",
        },
        {
          id: 613504,
          poster_path:
            "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
          title: "After We Collided",
        },
      ],
    }).as("getFavoriteMovies");
    cy.visit("http://localhost:3000/")
      .get(".starred-movies-nav")
      .click()
      .get(".starred-header")
      .contains("Your Starred Movies")
      .get(".movie-card")
      .contains("2067");
  });

  it("allows the user to return to main dashboard after viewing favorited movies", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
      {
        movies: [
          {
            id: 528085,
            poster_path:
              "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            title: "2067",
            average_rating: 5.166666666666667,
            release_date: "2020-10-01",
          },
          {
            id: 613504,
            poster_path:
              "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
            title: "After We Collided",
            average_rating: 5.25,
            release_date: "2020-09-02",
          },
        ],
      }
    ).as("getMovies");

    cy.intercept("GET", "http://localhost:3001/api/v1/starredMovies", {
      movies: [
        {
          id: 528085,
          poster_path:
            "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
          title: "2067",
        },
        {
          id: 613504,
          poster_path:
            "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
          title: "After We Collided",
        },
      ],
    }).as("getFavoriteMovies");

    cy.visit("http://localhost:3000/movies/starred")
      .get(".back-to-main-starred")
      .click();
    cy.get(".title").contains("Rancid Tomatillos");
  });

  it("allows a user to add a movie to favorites", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
      {
        movies: [
          {
            id: 528085,
            poster_path:
              "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            title: "2067",
            average_rating: 5.166666666666667,
            release_date: "2020-10-01",
          },
          {
            id: 613504,
            poster_path:
              "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
            title: "After We Collided",
            average_rating: 5.25,
            release_date: "2020-09-02",
          },
        ],
      }
    ).as("getMovies");

    cy.visit("http://localhost:3000/")
      .get(".movie-card")
      .first()
      .click()
      .get(".movie-title")
      .contains("2067")
      .get(".star-movie-btn")
      .click()
      .get(".star-movie-btn")
      .should("have.class", "solid");
  });

  it("allows a user to see a movie on the favorites page after it has been added", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
      {
        movies: [
          {
            id: 528085,
            poster_path:
              "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            title: "2067",
            average_rating: 5.166666666666667,
            release_date: "2020-10-01",
          },
          {
            id: 613504,
            poster_path:
              "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
            title: "After We Collided",
            average_rating: 5.25,
            release_date: "2020-09-02",
          },
        ],
      }
    ).as("getMovies");

    cy.intercept("GET", "http://localhost:3001/api/v1/starredMovies", {
      movies: [
        {
          id: 528085,
          poster_path:
            "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
          title: "2067",
        },
        {
          id: 613504,
          poster_path:
            "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
          title: "After We Collided",
        },
      ],
    }).as("getFavoriteMovies");

    cy.visit("http://localhost:3000/")
      .get(".starred-movies-nav")
      .click()
      .get(".movie-card")
      .first()
      .click()
      .get(".movie-title")
      .contains("2067");
  });
});
