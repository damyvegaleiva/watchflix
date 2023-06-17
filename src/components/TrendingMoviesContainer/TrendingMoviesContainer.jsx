import { useState } from "react";
import { TRENDING_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import TrendingMoviesList from "../TrendingMoviesList/TrendingMoviesList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const TrendingMoviesContainer = () => {
  const [option, setOption] = useState("week");
  const { useGetMovies } = useFetch();
  const { data: movies, isLoading } = useGetMovies(TRENDING_URL(option));

  if (isLoading) return <SpinnerLoader />;

  const handleClick = (value) => setOption(value);

  return (
    <section>
      <button
        className="block w-20 p-2 text-black bg-red-600"
        onClick={() => handleClick("day")}
      >
        Day
      </button>
      <button
        className="w-20 p-2 text-black bg-red-600"
        onClick={() => handleClick("week")}
      >
        Week
      </button>
      <h2 className="w-2/3 py-3 pl-4 mt-24 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TRENDING MOVIES
      </h2>
      <TrendingMoviesList movies={movies} />;
    </section>
  );
};

export default TrendingMoviesContainer;
