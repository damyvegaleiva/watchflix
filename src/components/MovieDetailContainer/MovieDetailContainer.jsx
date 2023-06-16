import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MOVIE_DETAIL_URL } from "../../config/config";
import MovieDetail from "../MovieDetail/MovieDetail";

const MovieDetailContainer = () => {
  const { movieId } = useParams();
  const { useGetMovieDetail } = useFetch();
  const { data: movie } = useGetMovieDetail(MOVIE_DETAIL_URL(movieId));

  console.log(movie);

  return <MovieDetail {...movie} />;
};

export default MovieDetailContainer;
