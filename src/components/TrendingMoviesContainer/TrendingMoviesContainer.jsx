import { TRENDING_URL } from "../../config/config";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

import useFetch from "../../hooks/useFetch";
import TrendingMoviesList from "../TrendingMoviesList/TrendingMoviesList";

const TrendingMoviesContainer = () => {
  const { useGetMovies } = useFetch();
  const { data: movies, isLoading } = useGetMovies(TRENDING_URL);

  if (isLoading) return <SpinnerLoader />;

  return (
    <section>
      <h2 className="w-2/3 py-3 pl-4 mt-24 mb-5 text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TRENDING MOVIES
      </h2>
      <TrendingMoviesList movies={movies} />;
    </section>
  );
};

export default TrendingMoviesContainer;
