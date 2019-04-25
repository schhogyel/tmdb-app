import axios from "axios";

async function searchMovie(query, abort = false) {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const response = await axios({
    method: "get",
    url
  });
  if (!abort) {
    let results;
    console.log("Search Response", response);
    if (response.data) {
      results = response.data;
    } else {
      results = [];
    }
    return results;
  }
}

export { searchMovie };
