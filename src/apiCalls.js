
const fetchMovies = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Error with requesting movies.");
    } else {
      return response.json();
    }
  });
};

const postStarredMovie = (movieToStar) => {
  return fetch("http://localhost:3001/api/v1/starredMovies", {
    method: "POST",
    body: JSON.stringify(movieToStar),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        "This movie has already been favorited or is missing a parameter"
      );
    } else {
      return response.json();
    }
  });
};

export { fetchMovies, postStarredMovie };
