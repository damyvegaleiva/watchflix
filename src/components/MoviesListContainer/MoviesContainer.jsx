import useFetch from "../../hooks/useFetch";
import MoviesList from "../MoviesList/MoviesList";

const MoviesListContainer = () => {
  const { mappedMovies } = useFetch();

  return (
    <main className="mt-10">
      <h2 className="mb-10 text-2xl text-center text-white">Search results:</h2>
      <MoviesList movies={mappedMovies} />
    </main>
  );
};

export default MoviesListContainer;
