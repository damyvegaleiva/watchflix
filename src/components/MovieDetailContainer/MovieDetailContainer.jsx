import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MOVIE_DETAIL_URL } from "../../config/config";
import MovieDetail from "../MovieDetail/MovieDetail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const MovieDetailContainer = () => {
  const { movieId } = useParams();
  const { useGetMovieDetail } = useFetch();
  const { data: movie, isLoading } = useGetMovieDetail(
    MOVIE_DETAIL_URL(movieId)
  );

  if (isLoading) return <SpinnerLoader />;

  return <MovieDetail {...movie} />;
};

export default MovieDetailContainer;
