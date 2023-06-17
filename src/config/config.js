const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const IMDB_URL = `https://www.imdb.com/title/`

const TRENDING_URL = selection => `/trending/movie/${selection}?language=en-US`
const MOVIE_SEARCH_URL = searchValue => `/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
const MOVIE_DETAIL_URL = movieId => `/movie/${movieId}?language=en-US`
const MOVIE_WATCH_PROVIDER = (movieId) => `/movie/${movieId}/watch/providers`


export { BASE_URL, OPTIONS, IMG_URL, MOVIE_SEARCH_URL, MOVIE_DETAIL_URL, IMDB_URL, TRENDING_URL, MOVIE_WATCH_PROVIDER }