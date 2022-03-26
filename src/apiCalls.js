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

 const fetchSingleMoive = () => {

}

export { fetchAllMovies, fetchSingleMoive }