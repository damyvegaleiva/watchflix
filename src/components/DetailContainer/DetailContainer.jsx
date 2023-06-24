import { useParams } from "react-router-dom";
import { DETAILS_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import Detail from "../Detail/Detail";
import { getModifiedData } from "../../utils/APIFunctions";

const DetailContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];
  const { data, isLoading } = useFetch(
    DETAILS_URL(selection, params.id),
    getModifiedData
  );

  console.log(data);

  if (isLoading) return <SpinnerLoader />;

  return <Detail {...data} isLoading={isLoading} />;
};

export default DetailContainer;
