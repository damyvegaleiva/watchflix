import { useParams } from "react-router-dom";
import { DETAILS_URL } from "../../../config/config";
import { getModifiedData } from "../../../utils/APIFunctions";
import useFetch from "../../../hooks/useFetch";
import DetailItem from "../DetailItem/DetailItem";
import HelmetContainer from "../../HelmetContainer/HelmetContainer";
import SpinnerLoader from "../../Loader/SpinnerLoader/SpinnerLoader";

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
      <DetailItem {...data} isLoading={isLoading} />;
    </>
  );
};

export default DetailContainer;
