import withResults from "../mocks/with-result.json";
import noResults from "../mocks/no-results.json";

const useFetch = () => {
  const movies = withResults.Search;
  const hasMovies = movies?.length > 0;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));

  return { mappedMovies, hasMovies };
};

export default useFetch;
