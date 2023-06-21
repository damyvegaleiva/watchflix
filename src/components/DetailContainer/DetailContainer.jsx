import { useParams } from "react-router-dom";
import { DETAIL_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import Detail from "../Detail/Detail";

const DetailContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];

  const { useGetMovieDetail } = useFetch();
  const { data: movie, isLoading } = useGetMovieDetail(
    DETAIL_URL(selection, params.id)
  );

  if (isLoading) return <SpinnerLoader />;

  return <Detail {...movie} isLoading={isLoading} />;
};

export default DetailContainer;
