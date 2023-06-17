import { useParams } from "react-router-dom";

import MoviesListContainer from "../MoviesListContainer/MoviesListContainer";
import MovieDetailContainer from "../MovieDetailContainer/MovieDetailContainer";
import TrendingMoviesContainer from "../TrendingMoviesContainer/TrendingMoviesContainer";

const HomeContainer = () => {
  const { movieTitle } = useParams();
  const { movieId } = useParams();

  return (
    <>
      <TrendingMoviesContainer />
      {movieTitle ? (
        <MoviesListContainer />
      ) : movieId ? (
        <MovieDetailContainer />
      ) : (
        ""
      )}
    </>
  );
};

export default HomeContainer;
