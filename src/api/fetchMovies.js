import axios from "axios";

async function fetchMovies(abort = false) {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const response = await axios({
    method: "get",
    url
  });
  if (!abort) {
    let results;
    console.log(response);
    if (response.data.results) {
      results = response.data.results;
    } else {
      results = [];
    }
    return results;
  }
}

export { fetchMovies };
