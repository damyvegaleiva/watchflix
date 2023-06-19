import { useParams } from "react-router-dom";
import { DETAIL_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import MovieDetail from "../Detail/Detail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const DetailContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];

  const { useGetMovieDetail } = useFetch();
  const { data: movie, isLoading } = useGetMovieDetail(
    DETAIL_URL(selection, params.id)
  );

  console.log(movie);

  if (isLoading) return <SpinnerLoader />;

  return <MovieDetail {...movie} />;
};

export default DetailContainer;
