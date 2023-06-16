const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzQ2N2RhYTZhYWY0Yzk0OWE1NjMyOTZlMWQ3ZTNmOCIsInN1YiI6IjY0OGI3ZDNmNGIwYzYzMDEyMTNmNjliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RX9vn7k7SZ6SAhFV7OKmrOeD6TcDr3RqjkdhtYh9OHw";

const BASE_URL = "https://api.themoviedb.org/3";



const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};
////////////////////////////////////////

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const MOVIE_SEARCH_URL = (searchValue) => {
  return `/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
}

const MOVIE_DETAIL_URL = (movieId) => {
  return `/movie/${movieId}?language=en-US`
}

const TRENDING_URL = '/trending/movie/day?language=en-US'

const IMDB_URL = `https://www.imdb.com/title/`

export { ACCESS_TOKEN, BASE_URL, OPTIONS, IMG_URL, MOVIE_SEARCH_URL, MOVIE_DETAIL_URL, IMDB_URL, TRENDING_URL }