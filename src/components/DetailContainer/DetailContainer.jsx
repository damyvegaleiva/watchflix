import { useParams } from "react-router-dom";
import { DETAILS_URL } from "../../config/config";
import { getModifiedData } from "../../utils/APIFunctions";
import useFetch from "../../hooks/useFetch";
import Detail from "../Detail/Detail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import HelmetContainer from "../HelmetContainer/HelmetContainer";

const DetailContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];
  const { data, isLoading } = useFetch(
    DETAILS_URL(selection, params.id),
    getModifiedData
  );

  if (isLoading)
    return (
      <>
        <HelmetContainer title={`Welcome To Netflix | ${data.title}`} />
        <SpinnerLoader />;
      </>
    );

  return (
    <>
      <Detail {...data} isLoading={isLoading} />;
    </>
  );
};

export default DetailContainer;
