import { useParams } from "react-router-dom";

import MoviesListContainer from "../MoviesListContainer/MoviesListContainer";
import MovieDetailContainer from "../MovieDetailContainer/MovieDetailContainer";

const HomeContainer = () => {
  const { movieTitle } = useParams();
  const { movieId } = useParams();

  return (
    <>
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
