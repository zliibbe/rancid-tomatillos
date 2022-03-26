const fetchAllMovies = (path) => {
   
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Error with requesting information.');
          } else {
           return response.json();
          }
        }).catch(error => {
            // error = 'TypeError: Failed to fetch' ? errorMsg.innerText = 'Server is not currently running' : 
            // errorMsg.innerText = 'Error encountered. See console.'
            console.warn(error)
        })
    
}

 const fetchSingleMoive = () => {

}

export { fetchAllMovies, fetchSingleMoive }