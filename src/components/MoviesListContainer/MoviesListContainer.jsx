import { useParams } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import useFetch from "../../hooks/useFetch";
import { MOVIE_SEARCH_URL } from "../../config/config";

const MoviesListContainer = () => {
  const { movieTitle } = useParams();
  const { useGetMovies } = useFetch();
  const { data, hasMovies } = useGetMovies(MOVIE_SEARCH_URL(movieTitle));

  return (
    <main className="mt-10">
      <h2 className="mb-10 text-2xl text-center text-white">Search results:</h2>
      {hasMovies ? (
        <MoviesList movies={data} />
      ) : (
        <p className="text-center text-white">No results found.</p>
      )}
    </main>
  );
};

export default MoviesListContainer;
