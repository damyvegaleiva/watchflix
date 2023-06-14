import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MoviesList from "../MoviesList/MoviesList";

const MoviesListContainer = () => {
  const { movieTitle } = useParams();
  const { data, hasMovies } = useFetch(`s=${movieTitle}`);

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
