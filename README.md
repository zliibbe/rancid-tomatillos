# Rancid Tomatillos 🍅

![Screen Shot 2022-04-04 at 6 07 03 PM](https://user-images.githubusercontent.com/92049763/161653343-b0536fc5-51ad-4e74-a173-90f489566bab.png)

## Description

Rancid Tomatillos is a paired-project written with the React JavaScript framework in 2-weeks.

The site is a crossover mimic of movie review sites like Rotten Tomatoes and streaming websites like Netflix or Hulu. On page load, the user can view a collection of movies -- clicking on a movie poster will route them to that specific movie's details including movie overview, runtime, rating, budget and revenue. From here the user can favorite movies to add them to their favorites list which can be accessed via the main dashboard.

For the favorite movies user-flow we incorporated a custom backend server using Express.js to serve up those favorites and allow users to star new movies.

The goals of this project were to create an app using the React.js framework, React Router for multi-page application functionality, to consume RESTful APIs via network requests & handling of asynchronous JavaScript, acceptance / end-to-end testing with Cypress, and the self-teaching involved in spinning up a custom backend server with Express.

## Motivation
- Gain competency with React.js fundamentals
- Utilize acceptance and E2E testing of site and asynchronous JavaScript with Cypress
- Create a multi-page application with React Router
- Build an Express.js server with support for GET and POST and error handling

## Technology Used
- React.js
- Express.js
- JavaScript
- HTML / JSX
- CSS3
- React Router
- Fetch API
- Cypress
- DayJS

## Deployment
Site deployment coming soon! For now, Rancid Tomatillos requires that this frontend repo be cloned down to your local server via `git clone`. Make sure to install dependencies locally as well - `npm i` and then `npm start` to run.

You will also need to clone down our [backend Express server](https://github.com/maddielaw/rancid-tomatillos-api) to your local machine and install any local dependencies with `npm i` and then `npm start` to run! 

## Features

### Main Dashboard

On load the user will see all movies with their posters and titles.

![rancid_dash_demo](https://user-images.githubusercontent.com/92049763/161648774-62445db2-18e1-49c2-af55-04bd0619016a.gif)

<details>
  <summary>Under the Hood</summary>
  Movies are populated using the fetch API from a remote server and displayed dynamically via React functional components.
</details>
</br>

### Single Movie Detail

When a user clicks on an individual movie poster on the main dashboard they are routed to a page with the details of that specific movie with a unique URL.

![rancid_single_movie_demo](https://user-images.githubusercontent.com/92049763/161648535-2caf701b-3460-474b-998f-c18b432f1a21.gif)

<details>
  <summary>Under the Hood</summary>
  Single movies are retrieved using the fetch API and interpolating a movie's individual ID into the URL. The site's URL is also changed to reflect that individual movie's id via React Router. Users can bookmark this URL to return to later!
</details>
</br>

### Favorite a Movie

A user can favorite a favorite movie from the single movie detail page, adding it to their list of favorites!

![rancid_fave_demo](https://user-images.githubusercontent.com/92049763/161648886-ae3cb6ca-e3d1-4e2b-9e06-85cbfbd999b1.gif)

<details>
  <summary>Under the Hood</summary>
  On click, the user's chosen movie to favorite is packaged and sent via POST request to our own custom backend server where it is stored. The server accounts for any missing parameters as well as duplicates -- users cannot favorite a movie more than once.
</details>
</br>

### Favorite Movies View 

From the main dashboard, a user can visit their Starred Movies page where they can view all of their existing favorite movies.

![rancid_fave_dash_demo](https://user-images.githubusercontent.com/92049763/161649032-225d0b98-2cf5-4cc0-868b-1991f4e9bc5f.gif)

<details>
  <summary>Under the Hood</summary>
  The favorite movies are populated with the fetch API to our custom Express server to render the user's favorite movies. The user can click on each movie to view details on their favorites.
</details>
</br>

### Testing

Rancid Tomatillos is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed.

![Screen Shot 2022-04-04 at 6 22 54 PM](https://user-images.githubusercontent.com/92049763/161654579-d6c6c49a-c3e6-43d1-955c-c3dea0c04339.png)


### Responsive Design & Accessibility

Rancid Tomatillos was built to be responsive across desktop, laptop, tablet, and mobile screen sizes and be fully tab and touch focusable for screen-reader accessibility. We are committed to continually improving to ensure our site is accessible to all users and welcome any and all feedback!

![rancid_mobile_demo](https://user-images.githubusercontent.com/92049763/161649607-a5b83ec4-59f8-41b8-bca0-d2cd736b7e47.gif)


## Future Additions
- Add DELETE support to our Express.js server so users can remove favorites
- Add loading screen to facilitate more seamless user experience in the case of slower internet connections
- Combine our two APIs into one to better aid in UX and error handling
- Add a search bar so users can search for movies by name or genre
- Add in a sliding carousel for the main dashboard

## Credits
Authors: [Maddie Law](https://github.com/maddielaw) & [Zach Liibbe](https://github.com/zliibbe)

Project spec -> [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)

[Turing School of Software and Design's GitHub](https://github.com/turingschool-examples)

[Icons - Heroicon](https://heroicons.dev/)
