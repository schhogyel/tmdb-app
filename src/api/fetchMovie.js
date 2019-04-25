import axios from "axios";

async function fetchMovie(id, abort = false) {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await axios({
    method: "get",
    url
  });
  if (!abort) {
    let results;
    console.log(response);
    if (response.data) {
      results = response.data;
    } else {
      results = [];
    }
    return results;
  }
}

export { fetchMovie };
