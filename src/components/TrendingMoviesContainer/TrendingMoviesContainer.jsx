import { TRENDING_URL } from "../../config/config";

import useFetch from "../../hooks/useFetch";
import TrendingMoviesList from "../TrendingMoviesList/TrendingMoviesList";

const TrendingMoviesContainer = () => {
  const { useGetMovies } = useFetch();

  const { data: movies } = useGetMovies(TRENDING_URL);

  return (
    <>
      <h2 className="w-1/2 py-3 pl-4 mt-24 mb-1 text-3xl text-left text-white bg-transparent rounded-md backdrop-blur">
        TRENDING MOVIES
      </h2>
      <TrendingMoviesList movies={movies} />;
    </>
  );
};

export default TrendingMoviesContainer;
