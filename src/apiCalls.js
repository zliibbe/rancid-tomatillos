const fetchAllMovies = (path) => {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Error with requesting movies.');
          } else {
           return response.json();
          }
        })
}

 const fetchSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
    if (!response.ok) {
        throw new Error('Error with requesting movies.');
      } else {
       return response.json();
      }
    })
}

const fetchStarredMovies = () => {
  return fetch('http://localhost:3001/api/v1/starredMovies')
    .then(response => {
      if(!response.ok) {
        throw new Error ('Error with requesting movies.');
      } else {
        return response.json();
      }
    })
}

const postStarredMovie = (movieToStar) => {
  fetch('http://localhost:3001/api/v1/starredMovies', {
    method: 'POST',
    body: JSON.stringify(movieToStar),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => {
      if (!response.ok) {
        throw new Error ('This movie has already been favorited or is missing a parameter');
      } else {
        return response.json()
      }
    })
    .catch(error => console.log(error))
}



export { fetchAllMovies, fetchSingleMovie, fetchStarredMovies, postStarredMovie }