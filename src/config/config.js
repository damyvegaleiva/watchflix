const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const IMDB_URL = `https://www.imdb.com/title/`
const YOUTUBE_URL = 'https://www.youtube.com/embed/'


const BASE_URL = "https://api.themoviedb.org/3";

const TRENDING_URL = value => `/trending/${value}/week?language=en-US`
const MOVIE_SEARCH_URL = (option, searchValue,) => `/search/${option}?query=${searchValue}&include_adult=false&language=en-US&page=1`
// const DETAIL_URL = (selection, id) => `/${selection}/${id}?language=en-US`
// const WATCH_PROVIDER = (selection, id) => `/${selection}/${id}/watch/providers`
// const VIDEOS_URL = (selection, id) => `/${selection}/${id}/videos?language=en-US`

const DETAILS_URL = (selection, id) => `/${selection}/${id}?&append_to_response=videos,watch/providers`


export { BASE_URL, OPTIONS, IMG_URL, MOVIE_SEARCH_URL, IMDB_URL, TRENDING_URL, YOUTUBE_URL, DETAILS_URL }
